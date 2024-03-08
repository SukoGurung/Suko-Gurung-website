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

function ProjectTitle({ image, title, link }: ProjectTitleProps) {
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

export default async function ProjectSection() {
  const exp: ExperienceProps[] = [
    {
      head1: (
        <ProjectTitle
          image="/images/logos/Findash.png"
          title="Financial Admin Dashboard"
          link="https://nextjs.org/"
        />
      ),
      head2: (
        <LabelWithGraphic icon={Icons.Stack} content="TypeScript, React, Next Js" />
      ),
      /* head3: (
        <LabelWithGraphic
          icon={Icons.Star}
          content={`# Github Stars: ${await getStarNumber(
            "vercel",
            "next.js"
          )}`}
        /> 
      ), */
      /* head4: "Sep 2023 - Pres.", */
      bulletPoints: [
        <p key={1}>The financial dashboard web app offers users a clear visualization of their company's Key Performance Indicators (KPIs). Utilizing <b>machine learning (linear regression)</b>, the app can predict future KPIs for the next year as well.</p>
      ],
    },

    {
      head1: (
        <ProjectTitle
          image="/images/logos/messaging.png"
          title="Real-Time Messaging App"
          link="https://nextjs.org/"
        />
      ),
      head2: (
        <LabelWithGraphic icon={Icons.Stack} content="MongoDB, Express, React, Node JS" />
      ),
      /* head3: (
        <LabelWithGraphic
          icon={Icons.Star}
          content={`# Github Stars: ${await getStarNumber(
            "vercel",
            "next.js"
          )}`}
        />
      ), */
      /* head4: "Sep 2023 - Pres.", */
      bulletPoints: [
        <p key = {1}>A secure web-based chat app with key features like real-time messaging, filesharing & groups focusing on user privacy and data security. Implemented <b>end-to-end encryption</b> and <b>user authentication</b> for secure communication.</p>
  ]},

    {
      head1: (
        <ProjectTitle
          image="/images/logos/suduko.png"
          title="Suduko - Logic Based Puzzle Game"
          link="https://tailwindcss.com/"
        />
      ),
      head2: <LabelWithGraphic icon={Icons.Stack} content="Python, Backtracking, Pygame" />,
     /* head3: <LabelWithGraphic icon={Icons.Star} content={`# Users: 412343`} />,*/
     /* head4: "Sep 2023 - Pres.", */
      bulletPoints: [
        <p key = {1}>created one of my favourite games, Sudoku with an optional Articial Intelligence solver that employs <b>backtracking</b>, an algorithmic technique for solving puzzles.</p>

      ],
    },
  ];

  return (
    <Section title="projects">
      <div className="flex flex-col gap-y-1">
        {exp.map((e, index) => (
          <Experience key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
