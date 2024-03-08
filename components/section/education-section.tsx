import Section from "./section";
import { Icons } from "@/components/icons";
import LabelWithGraphic from "@/components/label-with-graphic";

const education: EducationProps[] = [
  {
    title: "Bachelor of Science in Computer Science",
    gpa: "with Spatial Data Science minor",
    org: {
      name: "University of Oregon",
      logo: "/images/logos/uo.svg",
    },
    time: "Expected 2025",
  },
];

function Education({ title, gpa, org, time }: EducationProps) {
  return (
    <section className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
      <div className="hidden md:block">
        <div className="text-sm font-semibold flex flex-wrap justify-between text-zinc-700 dark:text-zinc-300">
          <div className="flex gap-x-4 flex-wrap">
            <span className="font-bold text-black dark:text-white">
              {title}
            </span>
             <LabelWithGraphic content={gpa}/> 
          </div>
          <span>{time}</span>
        </div>
        <LabelWithGraphic image={org.logo} content={org.name} />
      </div>
      <div className="text-sm font-semibold md:hidden text-zinc-700 dark:text-zinc-300 mb-1">
        <div className="flex gap-x-4 flex-wrap justify-between">
          <div className="font-bold text-black dark:text-white">{title}</div>
          <LabelWithGraphic icon={Icons.FileBadge} content={gpa} />
        </div>
        <div className="flex gap-x-4 flex-wrap justify-between">
          <LabelWithGraphic image={org.logo} content={org.name} />
          <span className="text-right flex-1">{time}</span>
        </div>
      </div>
    </section>
  );
}

export default function EducationSection() {
  return (
    <Section title="education">
      <div className="flex flex-col gap-y-1">
        {education.map((e, index) => (
          <Education key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
