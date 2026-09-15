import Image from "next/image";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="relative mx-auto flex w-full max-w-[1920px] flex-col gap-10 px-6 py-12 lg:block lg:h-[360px] lg:gap-0 lg:p-0">
        <div className="lg:absolute lg:top-[49px] lg:left-[84px]">
          <p className="text-[16px] leading-none font-bold">Contact us at</p>
          <a
            href="mailto:support@vyrix.in"
            className="mt-[17px] block text-[16px] leading-none font-normal transition-opacity hover:opacity-80"
          >
            support@vyrix.in
          </a>
        </div>

        <div className="lg:absolute lg:top-[141.5px] lg:left-[84px]">
          <p className="text-[16px] leading-none font-bold">Socials</p>
          <div className="mt-[22px] flex items-center gap-[6px]">
            <a
              href="https://instagram.com"
              aria-label="Vyrix on Instagram"
              className="relative block h-[40.47px] w-[38px]"
            >
              <Image
                src="/assets/icon-instagram.svg"
                alt=""
                fill
                sizes="38px"
                className="object-contain"
              />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="Vyrix on LinkedIn"
              className="relative block h-[40.47px] w-[38px]"
            >
              <Image
                src="/assets/icon-linkedin.svg"
                alt=""
                fill
                sizes="38px"
                className="object-contain"
              />
            </a>
          </div>
        </div>

        <div className="lg:absolute lg:top-[50.2px] lg:left-[1572.4px]">
          <div className="relative h-[208.42px] w-[167.23px]">
            <Image
              src="/assets/logo-aispire.png"
              alt="Aispire"
              fill
              sizes="167px"
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 text-[16px] leading-[23.43px] font-normal lg:hidden">
          <p>© 2026 Vyrix. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-[34px] gap-y-3">
            <a href="#" className="transition-opacity hover:opacity-80">
              Privacy Policy
            </a>
            <a href="#" className="transition-opacity hover:opacity-80">
              Terms of use
            </a>
          </div>
          <p>
            A product from <span className="font-bold">Aispire Private Limited</span>
          </p>
        </div>

        <p className="hidden text-[16px] leading-[23.43px] font-normal lg:absolute lg:top-[287.7px] lg:left-[84px] lg:block">
          © 2026 Vyrix. All rights reserved.
        </p>
        <a
          href="#"
          className="hidden text-[16px] leading-[23.43px] font-normal transition-opacity hover:opacity-80 lg:absolute lg:top-[287.7px] lg:left-[841px] lg:block"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="hidden text-[16px] leading-[23.43px] font-normal transition-opacity hover:opacity-80 lg:absolute lg:top-[287.7px] lg:left-[980px] lg:block"
        >
          Terms of use
        </a>
        <p className="hidden text-[16px] leading-[23.43px] font-normal lg:absolute lg:top-[287.7px] lg:left-[1510px] lg:block">
          A product from <span className="font-bold">Aispire Private Limited</span>
        </p>
      </div>
    </footer>
  );
}
