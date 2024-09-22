"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React, Next.js, Node.js, Express.js, Redux</li>
        <li>JavaScript, TypeScript, Java, Python, C, SQL</li>
        <li>MongoDB, Oracle, MySQL, PostgreSQL</li>
        <li>HTML, CSS, PHP, EJS, jQuery</li>
        <li>Recharts, TanStack, Drizzle ORM, Cypress, Vitest, Tailwind</li>
        <li>Object-Oriented Programming</li>
        <li>Web & Mobile App Development</li>
        <li>RESTful API building</li>
        <li>MVC & MVP design pattern</li>
        <li>Agile Methodology</li>
        <li>Project Management</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Computer Programming, <i>Algonquin College, Sep. 2022 - Sep. 2024</i>
        </li>
        <li>
          English Language and Literature,{" "}
          <i>Sun Yat-sen University, Sep. 2010 - Jun. 2014</i>
        </li>
        <li>
          English Literature, <i>University of Lisbon, Jan. 2013 - Jan. 2014</i>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <span className="text-primary-500">
            Full-stack Software Developer,{" "}
          </span>
          <i>
            Giatec Scientific Inc.
            <br /> Sept. 2023 - April. 2024, Ottawa, Ontario
          </i>
          <br />
          Worked in SmartMix team to build a personalized, AI-powered,
          centralized data management platform for clients in concrete industry.
        </li>
        <ol className="list-disc pl-5 py-2">
          <li>
            <span className="text-primary-400">Frontend</span>: worked with
            React, Redux, JavaScript, TypeScript and followed MVP design pattern
            to build reusable components and interactive features, such as data
            analysis graphs, data display charts and tables, and real-time
            validation.
          </li>
          <li>
            <span className="text-primary-400">Backend</span>: created new API
            endpoints to support frontend feature. Refactor database schemas.
            Implemented data security improvements such as user password
            encryption, username case-sensitivity refactoring, and backend
            data/schema validation.
          </li>
          <li>
            <span className="text-primary-400">QA/Testing</span>: implemented
            comprehensive testing strategies, including end-to-end tests using
            Cypress and unit tests with Vitest, Chai & Mocha, ensuring code
            quality and functionality.
          </li>
          <li>
            <span className="text-primary-400">Bug fixing</span>: resolved
            frontend and backend bugs efficiently on a daily bases, worked on
            hot fixes regularly before release, contributing to the overall
            stability of the software.
          </li>
          <li>
            <span className="text-primary-400">Project management</span>:
            actively participated in daily scrum meetings, story refinement, and
            retrospectives. Led retrospectives, and regularly showcased feature
            improvements in bi-weekly team demos. Collaborated with product
            managers to seek stakeholder feedback, and ensure alignment between
            development efforts and business object.
          </li>
        </ol>

        <li>
          <span className="text-primary-500">Web Developer, </span>
          <i>
            Triple Rooster Gallery
            <br /> Oct. 2020 - March. 2021, Guangzhou, China
          </i>
          <br />
          Built artist website for exhibition purpose using HTML, CSS,
          JavaScript, MailChimp.
        </li>
        <ol className="list-disc pl-5 py-2">
          <li>
            Developed an interactive and responsive professional artist website,
            featuring interactive grid photo galleries, carousel exhibitions and
            an email subscription function.
          </li>
        </ol>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChang = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="sm:items-center md:items-start md:grid md:grid-cols-[1fr_2fr] gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <Image
          src="/images/orange-computer.png"
          width={400}
          height={400}
          className="rounded-lg opacity-100 bg-[#ffffff] md:mt-10"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            I’m a full-stack software developer with a strong foundation in both
            computer programming and the humanities. I have completed my studies
            in Computer Programming at Algonquin College in September, 2024,
            where I maintain a GPA of 3.98. Prior to this, I earned a Bachelor’s
            degree in English Language and Literature from Sun Yat-sen
            University and studied at the University of Lisbon. This diverse
            background has given me a unique approach to solving problems and
            enhancing user experiences.{" "}
          </p>
          <br></br>
          <p className="text-base md:text-lg">
            I’m sociable by nature and tend to be the person who gets everyone
            working towards a common goal. I have excellent communication skills
            and know how to collaborate with both teammates and clients, always
            aiming for mutual success. At Giatec, where I completed my co-op, I
            applied these skills while contributing to an AI-powered data
            platform, working across the full stack, implementing security
            improvements, innovative features, and optimizing performance using
            Agile methodology. I love building modern, user-friendly
            applications and am always eager to learn new technologies. I’ve
            worked with JavaScript, React, Java, Python, and a variety of
            databases. Whether I’m troubleshooting code or helping a teammate, I
            thrive on working together to solve problems and create meaningful
            results.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChang("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChang("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChang("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
