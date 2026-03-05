"use client";

import { useRef, useEffect, useCallback } from "react";

const DOT_SPACING = 24;
const BASE_RADIUS = 1;
const MAX_RADIUS = 2.5;
const INFLUENCE_RADIUS = 120;
const BASE_OPACITY = 0.07;
const MAX_OPACITY = 0.35;

export function InteractiveDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);
  const visibleRef = useRef(true);
  const isTouchRef = useRef(false);

  const draw = useCallback(() => {
    if (!visibleRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;
    const { x: mx, y: my } = mouseRef.current;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const startCol = Math.max(0, Math.floor((mx - INFLUENCE_RADIUS) / DOT_SPACING) - 1);
    const endCol = Math.min(Math.ceil(width / DOT_SPACING), Math.ceil((mx + INFLUENCE_RADIUS) / DOT_SPACING) + 1);
    const startRow = Math.max(0, Math.floor((my - INFLUENCE_RADIUS) / DOT_SPACING) - 1);
    const endRow = Math.min(Math.ceil(height / DOT_SPACING), Math.ceil((my + INFLUENCE_RADIUS) / DOT_SPACING) + 1);

    // Draw base dots (batch)
    ctx.fillStyle = `rgba(255, 255, 255, ${BASE_OPACITY})`;
    for (let col = 0; col <= Math.ceil(width / DOT_SPACING); col++) {
      for (let row = 0; row <= Math.ceil(height / DOT_SPACING); row++) {
        if (!isTouchRef.current && col >= startCol && col <= endCol && row >= startRow && row <= endRow) continue;
        const x = col * DOT_SPACING;
        const y = row * DOT_SPACING;
        ctx.beginPath();
        ctx.arc(x, y, BASE_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Draw influenced dots (skip on touch devices)
    if (!isTouchRef.current) {
      for (let col = startCol; col <= endCol; col++) {
        for (let row = startRow; row <= endRow; row++) {
          const x = col * DOT_SPACING;
          const y = row * DOT_SPACING;
          const dist = Math.hypot(x - mx, y - my);

          if (dist > INFLUENCE_RADIUS) {
            ctx.fillStyle = `rgba(255, 255, 255, ${BASE_OPACITY})`;
            ctx.beginPath();
            ctx.arc(x, y, BASE_RADIUS, 0, Math.PI * 2);
            ctx.fill();
            continue;
          }

          const t = 1 - dist / INFLUENCE_RADIUS;
          const eased = t * t;
          const radius = BASE_RADIUS + (MAX_RADIUS - BASE_RADIUS) * eased;
          const opacity = BASE_OPACITY + (MAX_OPACITY - BASE_OPACITY) * eased;

          ctx.fillStyle = `rgba(190, 185, 255, ${opacity})`;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    rafRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Detect touch device
    isTouchRef.current = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
    };

    const container = canvas.parentElement;
    if (!container) return;

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    // IntersectionObserver to pause when not visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          rafRef.current = requestAnimationFrame(draw);
        }
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    resize();

    // On touch devices, draw once (static dots) and skip rAF loop
    if (isTouchRef.current) {
      requestAnimationFrame(draw);
    } else {
      rafRef.current = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    if (!isTouchRef.current) {
      container.addEventListener("mousemove", handleMouse);
      container.addEventListener("mouseleave", handleLeave);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      if (!isTouchRef.current) {
        container.removeEventListener("mousemove", handleMouse);
        container.removeEventListener("mouseleave", handleLeave);
      }
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0"
      aria-hidden="true"
    />
  );
}
