import Section from "./section";
import Experience from "@/components/experience";
import LabelWithGraphic from "@/components/label-with-graphic";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { type ImageProps } from "next/image";
import { headers } from "next/headers";

type ProjectTitleProps = {
  image: ImageProps["src"];
  title: string;
  link: string;
};

async function getStarNumber(owner: string, repo: string) {
  const host = headers().get("host");
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
  const queryParams = new URLSearchParams({ owner, repo }).toString();
  const res = await fetch(
    `${protocol}://${host}/api/github/star?${queryParams}`,
    {
      cache: "no-cache",
    }
  );
  const { starNumber } = await res.json();
  return starNumber;
}

function ExtraTitle({ image, title, link }: ProjectTitleProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex items-center gap-x-1 group"
    >
      <LabelWithGraphic image={image} content={title} />
      <Icons.Link
        size={12}
        className="text-zinc-400 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200 group-hover:animate-shake"
      />
    </Link>
  );
}

export default async function ExtraSection() {
  const exp: ExperienceProps[] = [
    {
      head1: (
        <ExtraTitle
          image=""
          title=" Volunteer - Web Developer & Tech Lead at EKSCA:"
          link="https://nextjs.org/"
        />
      ),
     
      head2: "Sep 2023 - Pres.",
      bulletPoints: [
        "Maintaining the website and managing web content such as blogs, media files, etc.,to enhance online presence. Currently migrating to WordPress.",
        "guiding the association on various aspects of technology and their adoption.",
      ],
    },

    {
      head1: (
        <ExtraTitle
          image=""
          title="Member-Oregon Blockchain Group:"
          link="https://nextjs.org/"
        />
      ),
      
      head2: "Sep 2022 - Nov 2023.",
      bulletPoints: [
        "Researched and shared diverse facets of FinTech, Blockchain and Web3 technologies, analyzing their emergence and market trends, regulatory frameworks, etc.",
        "participated in successful pitches and voting for various decentralized autonomous organization (DAO), contributing to club's investment in tokens and comprehensive portfolio management.",
      ],
    },

   
  ];

  return (
    <Section title="Involvements">
      <div className="flex flex-col gap-y-1">
        {exp.map((e, index) => (
          <Experience key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
