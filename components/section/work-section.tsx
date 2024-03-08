import Section from "./section";
import Experience from "@/components/experience";
import LabelWithGraphic from "@/components/label-with-graphic";
import { Icons } from "@/components/icons";

const exp: ExperienceProps[] = [
  {
    head1: "Information Technology Analyst -",
    head2: "Nov 2022 - Pres.",

    head3: (
      <LabelWithGraphic
        image="/images/logos/uo.svg"
        content="University of Oregon"
      />
    ),
    
    bulletPoints: [
      "Resolved technical issues related to hardware, software, across various Windows and macOs devices and network connectivity promptly via walk-up, phone and ticketing system TeamDynamix, resulting in a 21% improvement in response and resolution time. ",
      "Configured, re-imaged, and monitored university-devices for faculty and staffs, collaborating closely with the Enterprise Device Management (EDM) team, reducing in device downtime and increasing in overall system efficiency.",
      "Improved communication clarity by effectively translating data and technical concepts for both Information Technology Consultants (ITCs) and non-technical users, resulting in enhanced understanding and collaboration.",
      "Contributed in the documentation and implementation of Student Landing and Onboarding Page confluence article resulting in a more streamlined process and efficient procedure.",
    ],
    head4: <LabelWithGraphic icon={Icons.Stack} content="Python, Power BI, SQL, Bash " />,
  }
  /*** 
  
  {
    head1: "Customer Experience Representative -",
    /* head2: <LabelWithGraphic icon={Icons.Stack} content="Financial Modeling" />, 
    head3: (
      <LabelWithGraphic
        image="/images/logos/bitcoin.png"
        content="Campus Recreational Center at PSU"
      />
    ),
    head4: "Sep 2021 - Sep 2022",
    bulletPoints: [
      "Sint fugiat eu magna irure eu incididunt est sint occaecat fugiat tempor.",
      "Ipsum culpa fugiat consectetur nulla enim consequat ea tempor fugiat. Reprehenderit ullamco cillumn.",
      "Nostrud quis reprehenderit non officia ullamco magna. Magna Lorem minim nisi occaecat adipisicing.",
    ],

  }, 
  ***/
];

export default function WorkSection() {
  return (
    <Section title="work experiences">
      <div className="flex flex-col gap-y-1">
        {exp.map((e, index) => (
          <Experience key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
