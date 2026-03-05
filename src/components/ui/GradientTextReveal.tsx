"use client";

import { useRef, useEffect, useState, useCallback } from "react";

const GREEK_CHARS = "αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ";
const SCRAMBLE_DURATION = 1800;
const CHARS_PER_SECOND = 16;
const STAGGER = 120;

interface Props {
  greekWord: string;
  englishWord: string;
  className?: string;
}

export function GradientTextReveal({ greekWord, englishWord, className }: Props) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayChars, setDisplayChars] = useState<string[]>([]);
  const [charStates, setCharStates] = useState<("greek" | "scrambling" | "resolved")[]>([]);
  const [animDone, setAnimDone] = useState(false);

  // Use the longer word for character count during animation
  const maxLen = Math.max(greekWord.length, englishWord.length);

  const startAnimation = useCallback(() => {
    if (hasAnimated) return;
    setHasAnimated(true);

    const greekPadded = greekWord.padEnd(maxLen, " ");
    setDisplayChars(greekPadded.split(""));
    setCharStates(new Array(maxLen).fill("greek"));

    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const newChars: string[] = [];
      const newStates: ("greek" | "scrambling" | "resolved")[] = [];
      let allResolved = true;

      for (let i = 0; i < maxLen; i++) {
        const charStart = 400 + i * STAGGER;
        const charElapsed = elapsed - charStart;
        const charDuration = SCRAMBLE_DURATION - i * (STAGGER * 0.4);
        const finalChar = i < englishWord.length ? englishWord[i] : "";

        if (charElapsed < 0) {
          newChars.push(greekPadded[i] || " ");
          newStates.push("greek");
          allResolved = false;
        } else if (charElapsed >= charDuration) {
          newChars.push(finalChar);
          newStates.push("resolved");
        } else {
          const progress = charElapsed / charDuration;
          const speed = CHARS_PER_SECOND * (1 - progress * 0.7);
          const tick = Math.floor(charElapsed / (1000 / speed));

          if (progress > 0.7 && Math.random() > 0.5) {
            newChars.push(finalChar || GREEK_CHARS[tick % GREEK_CHARS.length]);
          } else {
            newChars.push(GREEK_CHARS[tick % GREEK_CHARS.length]);
          }
          newStates.push("scrambling");
          allResolved = false;
        }
      }

      setDisplayChars(newChars);
      setCharStates(newStates);

      if (!allResolved) {
        requestAnimationFrame(animate);
      } else {
        setAnimDone(true);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, greekWord, englishWord, maxLen]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    setDisplayChars(greekWord.padEnd(maxLen, " ").split(""));
    setCharStates(new Array(maxLen).fill("greek"));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [startAnimation, greekWord, maxLen]);

  return (
    <span ref={containerRef} className="relative inline-block transition-all duration-500 ease-out" aria-label={englishWord}>
      {/* Invisible sizing span — wide during animation, shrinks to final word */}
      <span className="invisible" aria-hidden="true">{animDone ? englishWord : greekWord}</span>
      {/* Animated characters positioned on top */}
      <span className={`absolute inset-0 flex items-center justify-center ${className}`}>
        {displayChars.map((char, i) => (
          <span
            key={i}
            className={`inline-block ${
              charStates[i] === "scrambling" ? "animate-char-roll" : ""
            } ${charStates[i] === "resolved" && char === "" ? "w-0" : ""}`}
          >
            {char || "\u200B"}
          </span>
        ))}
      </span>
    </span>
  );
}
