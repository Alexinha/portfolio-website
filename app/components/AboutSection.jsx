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
        <li>Node.js</li>
        <li>React & NextJs</li>
        <li>JavaScript</li>
        <li>Java</li>
        <li>SQL</li>
        <li>TypeScript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Algonquin College</li>
        <li>Sun Yat-sen University</li>
        <li>University of Lisbon</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Full-stack Developer, Giatec Scientific Inc., Ottawa, Ontario</li>
        <li>Web Developer, Triple Rooster Gallery, Guangzhou, China</li>
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
      <div className="sm:items-center md:items-start md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <Image
          src="/images/orange-computer.png"
          width={400}
          height={400}
          className="rounded-lg opacity-100 bg-[#ffffff] md:mt-8"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ultrices nisi non pretium consequat. Vivamus dignissim euismod ante,
            in scelerisque leo dapibus vitae. Praesent eu volutpat metus.
            Praesent ullamcorper semper nibh, et placerat justo scelerisque sit
            amet. Cras viverra posuere massa eget tempus. In a est at ex iaculis
            mollis. Curabitur congue justo vulputate est bibendum iaculis. Proin
            faucibus massa metus, eget bibendum metus porta nec. Quisque sit
            amet egestas turpis. Sed vitae auctor diam. Integer lacinia rhoncus
            odio cursus tincidunt. Sed commodo gravida dui, ac imperdiet massa
            tempor eget. Pellentesque est libero, volutpat in posuere congue,
            fringilla ac tortor.
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
