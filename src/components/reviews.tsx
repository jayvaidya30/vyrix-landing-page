import { Fragment } from "react";
import Image from "next/image";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Review = {
  stars: number;
  height: string;
  lines: string[];
};

const LEFT_REVIEWS: Review[] = [
  {
    stars: 5,
    height: "lg:min-h-[271px]",
    lines: [
      "As long as I have uploaded all my research",
      "papers and don't have to fish around for what all",
      "I researched and where it went, It already takes",
      "away half of the pain, or else half the time I",
      "would be going to my history search to find the",
      "Information I had once found, just because I",
      "took a break for a few days, but if I put it in the",
      "repository I can't possibly miss it.",
    ],
  },
  {
    stars: 5,
    height: "lg:min-h-[170px]",
    lines: [
      "Never really thought of an app for research, so",
      "the idea it self was interesting, all the small",
      "details and options, for adding files and links",
      "were very helpful.",
    ],
  },
  {
    stars: 4,
    height: "lg:min-h-[170px]",
    lines: [
      "Having a repository is definitely a time-saver, but",
      "could be more efficient with the suggested",
      "improvements. The application is not unnecessarily",
      "complex, which is very user-friendly.",
    ],
  },
];

const RIGHT_REVIEWS: Review[] = [
  {
    stars: 4,
    height: "lg:min-h-[147px]",
    lines: [
      "I feel like research most of the times specially for",
      "students is very rushed, in that case yes Vyrix is",
      "helpful in keeping tabs ok whats done and what is left.",
    ],
  },
  {
    stars: 4,
    height: "lg:min-h-[215px]",
    lines: [
      "The Roadmap, Flow repository and Workspace.",
      "Loved the range of customization in the native Vyrix",
      "document. Being able to add Canva/Figma file",
      "directly is such a cool feature. Being able to mark",
      "projects complete or Incomplete. And being able to",
      "sort the projects in the folders in order of priority.",
    ],
  },
  {
    stars: 5,
    height: "lg:min-h-[268px]",
    lines: [
      "Well, to look back I had Al that I could use at an",
      "instant to find research papers related to the",
      "subject and the fact that i could upload a lot of",
      "different types of files into one place. Also the To",
      "do list being In the front space of the app really",
      "helped me (I normally don't use to-dos - hence",
      "getting distracted) stay focused as I was eager to",
      "check something off the list.",
    ],
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <Card
      className={cn(
        "gap-0 rounded-[26px] bg-vyrix py-[22px] ring-0 shadow-[0px_4px_14px_0px_rgba(0,28,38,0.33)]",
        "px-[30px] text-[18px] leading-[25px] font-medium text-paper",
        review.height
      )}
    >
      <div className="flex h-[17.455px] items-center gap-[1.5px]">
        {Array.from({ length: review.stars }).map((_, index) => (
          <Image
            key={index}
            src="/assets/icon-star.svg"
            alt=""
            aria-hidden
            width={17}
            height={17}
            className="h-[17.455px] w-[17.455px] shrink-0"
          />
        ))}
      </div>
      <p className="mt-[4.5px] xl:whitespace-nowrap">
        {review.lines.map((line, index) => (
          <Fragment key={line}>
            {index > 0 ? <br className="hidden lg:inline" /> : null}
            {line}{" "}
          </Fragment>
        ))}
      </p>
      <span className="sr-only">{review.stars} out of 5 stars</span>
    </Card>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-paper pt-[72px] pb-[72px] lg:pt-[160px] lg:pb-[206px]"
    >
      <div className="mx-auto w-full max-w-[1505px] px-6">
        <h2 className="font-display text-center text-[36px] leading-none text-ink sm:text-[48px]">
          Reviews
        </h2>
        <p className="mx-auto mt-[18px] max-w-[596px] text-center text-[18px] leading-[27px] font-medium text-ink lg:mt-[20px] lg:text-[20px]">
          Feedbacks based on Beta testing across India&apos;s leading design and
          innovation institutes including NIFT, NID, and UPES
        </p>

        <div className="mx-auto mt-[56px] flex max-w-[1041px] flex-col gap-[30px] lg:mt-[113px] lg:flex-row lg:gap-[25px]">
          <div className="flex flex-col gap-[30px] lg:w-[495px]">
            {LEFT_REVIEWS.map((review) => (
              <ReviewCard key={review.lines[0]} review={review} />
            ))}
          </div>
          <div className="flex flex-col gap-[19px] lg:mt-[4px] lg:w-[521px]">
            {RIGHT_REVIEWS.map((review) => (
              <ReviewCard key={review.lines[0]} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
