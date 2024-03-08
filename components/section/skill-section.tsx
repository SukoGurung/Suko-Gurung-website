import Section from "./section";

export default function SkillSection() {
  return (
    <Section title="skills">
      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold">Programming</span>:
        </div>
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          JavaScript, Python, C/C++
        </div>
      </div>

      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold"> Frontend Tech </span>:
        </div>
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          HTML/CSS, React Js, Tailwind css
        </div>
      </div>

      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold">Backend Tech</span>:
        </div>
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          Node Js, C/C++, Express Js
        </div>
      </div>

      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold"> Data Technology </span>:
        </div>
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          R-language, Machine Learning, PostgreSQL, MongoDB, A/B Testing
        </div>
      </div>

      <div className="md:flex text-sm">
        <div className="w-32 flex-shrink-0 flex justify-between">
          <span className="font-bold"> Other Skills/Tools</span>:
        </div>
        <div className="md:ml-8 text-zinc-700 dark:text-zinc-300">
          Git, Github, Vscode, Restful APIs, OAuth, SQL Injection
        </div>
      </div>
    </Section>
  );
}
