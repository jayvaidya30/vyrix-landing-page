import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "What’s new", href: "#whats-new" },
  { label: "Reviews", href: "#reviews" },
  { label: "Download", href: "#download" },
];

export function SiteNav() {
  return (
    <header className="relative z-30">
      <div className="h-[72px] border-b-2 border-hairline bg-paper">
        <div className="relative mx-auto flex h-full max-w-[1920px] items-center justify-between pl-6 pr-6 lg:pl-[40px] lg:pr-[94px]">
          <Link
            href="#top"
            aria-label="Vyrix Beta 2"
            className="relative block h-[31.07px] w-[58.49px] shrink-0"
          >
            <Image
              src="/assets/logo-vyrix-beta.png"
              alt="Vyrix Beta 2"
              fill
              sizes="59px"
              preload
              className="object-contain"
            />
          </Link>

          <nav className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-[56px] lg:flex xl:gap-[74px]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[16px] leading-none font-bold text-ink-soft transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Button
            render={<a href="#contact" />}
            className="h-[52px] rounded-[26px] bg-vyrix px-[41px] text-[16px] leading-none font-bold text-cream hover:bg-vyrix-deep"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}
