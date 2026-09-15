import Image from "next/image";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="product" className="relative overflow-hidden bg-paper lg:h-[2357px]">
      <Image
        src="/assets/hero-circles.svg"
        alt=""
        aria-hidden
        width={1134}
        height={1134}
        preload
        className="pointer-events-none absolute top-[-60px] left-1/2 w-[720px] max-w-none -translate-x-1/2 select-none sm:w-[900px] lg:top-[-134px] lg:w-[1134px] lg:-translate-x-[calc(50%+50px)]"
      />

      <div className="relative px-6 pt-[96px] text-center lg:pt-[242px] lg:-translate-x-[30px]">
        <h1 className="font-display mx-auto text-[40px] leading-[1.09] text-ink sm:text-[52px] lg:text-[64px] lg:leading-[70px]">
          Vyrix Beta 2 just
          <br />
          landed <span className="text-vyrix-deep">on campus.</span>
        </h1>

        <p className="mx-auto mt-[24px] max-w-[634px] text-[18px] leading-[27px] font-medium text-ink lg:text-[20px]">
          Your Personal Research workspace. Faster, smarter, and built for
          students. This time with integrated AI, Workspaces and a fresh UI. Try
          it for free right now
        </p>

        <div className="mt-[28px] flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            render={<a href="#download" />}
            className="h-[52px] w-[242px] rounded-[26px] bg-vyrix text-[16px] leading-none font-bold text-cream hover:bg-vyrix-deep"
          >
            Download Vyrix Beta 2
          </Button>
          <Button
            variant="outline"
            render={<a href="#whats-new" />}
            className="h-[52px] w-[193px] rounded-[26px] border border-vyrix bg-transparent text-[16px] leading-none font-semibold text-vyrix hover:bg-vyrix/5 hover:text-vyrix"
          >
            See what’s new
          </Button>
        </div>
      </div>

      <div className="relative mt-[64px] px-6 lg:static lg:mt-0">
        <Image
          src="/assets/hero.png"
          alt="Vyrix home screen showing missions and recent chats"
          width={839}
          height={484}
          preload
          className="mx-auto h-auto w-full max-w-[839px] lg:absolute lg:top-[776px] lg:left-1/2 lg:mx-0 lg:w-[839px] lg:max-w-none lg:-translate-x-[calc(50%+33px)]"
        />
        <Image
          src="/assets/app-dashboard@2x.png"
          alt="Vyrix workspace with mission tracking and flow repository"
          width={2970}
          height={1694}
          className="mx-auto mt-[80px] h-auto w-full max-w-[1485px] lg:absolute lg:top-[1514px] lg:left-1/2 lg:mt-0 lg:w-[1485px] lg:max-w-[calc(100vw-120px)] lg:-translate-x-1/2"
        />
      </div>
    </section>
  );
}
