import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

function FeatureBlock({
  title,
  className,
  bodyClassName,
  children,
}: {
  title: string;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn(className)}>
      <h3 className="text-[24px] leading-[29px] font-bold text-ink-soft">
        {title}
      </h3>
      <div
        className={cn(
          "mt-[14px] text-[20px] leading-[35px] font-medium text-ink",
          bodyClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function WhatsNew() {
  return (
    <section
      id="whats-new"
      className="bg-mist pt-[72px] pb-[72px] lg:mt-[92px] lg:h-[1605px] lg:pt-0 lg:pb-0"
    >
      <div className="mx-auto w-full max-w-[1505px] px-6">
        <h2 className="font-display text-center text-[36px] leading-none text-black sm:text-[48px] lg:pt-[117px]">
          What&apos;s new in Beta 2
        </h2>
        <p className="mx-auto mt-[18px] max-w-[634px] text-center text-[18px] leading-[27px] font-medium text-ink lg:mt-[17px] lg:text-[20px]">
          Every item below came out of Beta 1 feedback threads. If you asked for
          it, it&apos;s probably here.
        </p>

        <div className="mx-auto mt-[56px] flex max-w-[1457px] flex-col gap-[56px] lg:mt-[119px] lg:flex-row lg:gap-0">
          <div className="lg:w-[786px]">
            <FeatureBlock
              title="Seamless AI across your workspace"
              className="lg:max-w-[736px]"
            >
              <p>
                AI is now integrated across all your projects giving users an
                user the head experience. With Features such as,
              </p>
              <ol className="list-decimal pl-[30px]">
                <li>
                  No need to explain your projects again and again every time you
                  start a new chat.
                </li>
                <li>Ai will provide you with a Roadmap based on your Goals &amp; Needs.</li>
                <li>
                  Quickly know what to do next in your projects with real time
                  suggestions, and validate your progress.
                </li>
              </ol>
            </FeatureBlock>

            <FeatureBlock title="A Fresh new look" className="lg:mt-[338px]">
              <ol className="list-decimal pl-[30px]">
                <li>
                  Light theme is now available giving users an option to switch
                  between dark and light theme as they prefer.
                </li>
                <li>UI hierarchy is improved and navigation is much more simpler.</li>
                <li>
                  A carefully calibrated palette that lets you work longer without
                  visual fatigue.
                </li>
              </ol>
            </FeatureBlock>
          </div>

          <div className="lg:-ml-[89px] lg:w-[760px] lg:pt-[324px]">
            <FeatureBlock
              title="Reworked Repository - A Dynamic, living space"
              bodyClassName="lg:mt-[25px]"
            >
              <ol className="list-decimal pl-[30px]">
                <li>
                  The Repository is now Flow, which implies what it means - Your
                  Research roadmap where you can store all your resources.
                </li>
                <li>
                  Now you can import all your files from flow directly into your
                  notes and even into Ai chats.
                </li>
                <li>
                  Coming shipped with more personalization options to provide you
                  flexibility with your projects.
                </li>
              </ol>
            </FeatureBlock>

            <FeatureBlock
              title="Other new Features"
              className="lg:mt-[313px] lg:max-w-[587px]"
            >
              <ol className="list-decimal pl-[30px]">
                <li>Added Whiteboards.</li>
                <li>Create notes directly in Flow.</li>
                <li>You can now rename folders, files, and links.</li>
                <li>
                  Notes can be exported as doc files &amp; pdfs, and whiteboards
                  can be exported as pdfs.
                </li>
                <li>Chat history with Ai will now be stored.</li>
                <li>Overall User flow is improved significantly.</li>
              </ol>
            </FeatureBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
