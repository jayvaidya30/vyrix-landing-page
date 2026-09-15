import Image from "next/image";

import { Button } from "@/components/ui/button";

function PlatformGroup({
  icon,
  label,
  iconWidth,
}: {
  icon: string;
  label: string;
  iconWidth: number;
}) {
  return (
    <div className="flex w-full max-w-[440.76px] flex-col items-center">
      <div className="flex h-[62px] items-center gap-[37px]">
        <Image
          src={icon}
          alt=""
          aria-hidden
          width={iconWidth}
          height={62}
          className="h-[62px] w-[62px] object-contain"
        />
        <span className="text-[32px] leading-none font-medium text-black lg:translate-y-[3px]">
          {label}
        </span>
      </div>

      <div className="mt-[27px] flex w-full items-center gap-[22.28px]">
        <Button
          variant="outline"
          className="h-[52px] flex-1 rounded-[26px] border border-[#616161] bg-transparent text-[16px] leading-none font-bold text-black hover:bg-black/5 hover:text-black"
        >
          How to install
        </Button>
        <Button
          render={<a href="#download" />}
          className="h-[52px] flex-1 rounded-[26px] bg-vyrix text-[16px] leading-none font-bold text-cream hover:bg-vyrix-deep"
        >
          Download
        </Button>
      </div>
    </div>
  );
}

export function Platforms() {
  return (
    <section
      id="download"
      className="bg-paper pt-[72px] pb-[72px] lg:pt-[18px] lg:pb-[293px]"
    >
      <div className="mx-auto w-full max-w-[1505px] px-6">
        <h2 className="font-display text-center text-[36px] leading-none text-black sm:text-[48px]">
          Choose your platform
        </h2>

        <div className="mt-[56px] flex flex-col items-center gap-[56px] lg:mt-[115px] lg:-translate-x-[30px] lg:flex-row lg:items-start lg:justify-center lg:gap-[100px]">
          <PlatformGroup
            icon="/assets/icon-windows.png"
            label="Windows"
            iconWidth={62}
          />
          <PlatformGroup
            icon="/assets/icon-apple.png"
            label="Mac"
            iconWidth={62}
          />
        </div>
      </div>
    </section>
  );
}
