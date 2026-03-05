"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
          poietai<span className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">.ai</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            className="rounded-lg bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Get Early Access
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-8 w-8 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 10h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#waitlist"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] px-4 py-2.5 text-center text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
