import Image from "next/image";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col gap-10 px-6 py-12 lg:h-[360px] lg:flex-col lg:gap-0 lg:px-[84px] lg:pt-[49px] lg:pb-[49px]">
        <div className="flex flex-col gap-10 lg:flex-1 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-10 lg:gap-[44px]">
            <div>
              <p className="text-[16px] leading-none font-bold">Contact us at</p>
              <a
                href="mailto:support@vyrix.in"
                className="mt-[17px] block text-[16px] leading-none font-normal transition-opacity hover:opacity-80"
              >
                support@vyrix.in
              </a>
            </div>

            <div>
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
          </div>

          <div className="relative h-[208.42px] w-[167.23px] shrink-0">
            <Image
              src="/assets/logo-aispire.png"
              alt="Aispire"
              fill
              sizes="167px"
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 text-[16px] leading-[23.43px] font-normal lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 Vyrix. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-[34px] gap-y-3 lg:gap-x-[139px]">
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
      </div>
    </footer>
  );
}
