import { Hero } from "@/components/hero";
import { Platforms } from "@/components/platforms";
import { Reviews } from "@/components/reviews";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { WhatsNew } from "@/components/whats-new";

export default function Home() {
  return (
    <main id="top" className="flex-1">
      <SiteNav />
      <Hero />
      <WhatsNew />
      <Reviews />
      <Platforms />
      <SiteFooter />
    </main>
  );
}
