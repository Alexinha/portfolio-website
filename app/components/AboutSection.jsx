"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChang = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <Image
          src="/images/vaporwave.jpg"
          width={400}
          height={400}
          className="rounded-lg opacity-100 bg-[#ffffff]"
        />
        <div>
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
