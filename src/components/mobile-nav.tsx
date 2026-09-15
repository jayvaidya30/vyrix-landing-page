"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { NAV_LINKS } from "@/lib/nav-links";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 lg:hidden"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden
          className="pointer-events-none"
        >
          {open ? (
            <path
              d="M5 5l10 10M15 5L5 15"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M3 5.5h14M3 10h14M3 14.5h14"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      <div
        id="mobile-nav"
        className={`absolute inset-x-0 top-full border-b-2 border-hairline bg-paper px-6 pt-[10px] pb-[18px] shadow-[0_18px_28px_-24px_rgba(0,0,0,0.45)] transition-[opacity,transform,visibility] duration-200 lg:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col divide-y divide-hairline/70">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-[14px] text-[16px] leading-none font-bold text-ink-soft transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
