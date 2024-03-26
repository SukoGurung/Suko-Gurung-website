import Section from "./section";

export default function SkillSection() {
  return (
    <Section title="skills">
      <div className="md:flex items-center flex-nowrap text-sm">
        <div className="min-w-[8rem] flex-shrink-0 flex ">
          <span className="font-bold mr-2">Programming</span>: <span className="lg:ml-9 text-zinc-700 dark:text-zinc-300 ml-2">  Python, JavaScript,  C/C++ </span>
        </div>
      </div>

      <div className="md:flex items-center flex-nowrap text-sm">
        <div className="min-w-[8rem] flex-shrink-0 flex">
          <span className="font-bold mr-2"> Frontend Tech </span>:
        <span className="lg:ml-8 text-zinc-700 dark:text-zinc-300 ml-2">
        HTML, Tailwind CSS, React Js, Material UI
        </span>
        </div>
      </div>

      <div className="md:flex items-center flex-nowrap text-sm">
        <div className="min-w-[8rem] flex-shrink-0 flex">
          <span className="font-bold mr-2">Backend Tech</span>:
        <span className="lg:ml-9 text-zinc-700 dark:text-zinc-300 ml-2">
          Node Js, C/C++, Express Js
        </span>
        </div>
      </div>

      <div className="md:flex items-center flex-nowrap text-sm">
        <div className="min-w-[8rem] flex-shrink-0 flex">
          <span className="font-bold mr-2"> Data Technology </span>:
        <span className="lg:ml-4 text-zinc-700 dark:text-zinc-300 ml-2">
          R, regression (ML), PostgreSQL, MongoDB, MySQL
        </span>
        </div>
      </div>

      <div className="md:flex items-center flex-nowrap text-sm">
        <div className="min-w-[8rem] flex-shrink-0 flex">
          <span className="font-bold mr-2"> Other Skills/Tools</span>:
        <span className="lg:ml-3 text-zinc-700 dark:text-zinc-300 ml-2">
         Restful APIs, Git, Github, Vscode, OAuth, SQL Injection
          </span>
        </div>
      </div>
    </Section>
  );
}
