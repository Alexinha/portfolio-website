"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const PROJ_DATA = [
  {
    id: 1,
    title: "Software Developer Portfolio Website",
    description:
      "React, Next.js, JavaScript. Dynamic website with animation, responsive design, and email sending feature",
    image: "/images/projects/proj-1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Alexinha/portfolio-website",
    previewUrl: "https://alexina-portfolio-website.vercel.app/",
  },
  {
    id: 2,
    title: "Artist Exhibition Marketing Website",
    description:
      "HTML, CSS, JavaScript. Respinsive website with dynamic navbar, gallery, carousel, and subscription feature.",
    image: "/images/projects/proj-2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Alexinha/sailormoon",
    previewUrl: "https://alexinha-sailormoon.netlify.app/",
  },
  {
    id: 3,
    title: "React Blog",
    description:
      "React, JSON Server, JavaScript. A website that renders dynamic content. It allows user to add content and save it to the app.",
    image: "/images/projects/proj-3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Alexinha/Blog_React_2023",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Node.js Weather App",
    description:
      "Node.js, Express.js, API Integration, JSON handling. An app that makes API calls based on user input and displays weather forcast accordingly. ",
    image: "/images/projects/proj-4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Alexinha/weather-forcast-app",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Python Traffic Records Manipulator",
    description:
      "Python, sqlite3, MVC design pattern. User can save, create, refresh, delete, and search records with database, as well as exporting records into new CSV file.",
    image: "/images/projects/proj-5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Alexinha/traffic-record-wizard",
    previewUrl: "",
  },
  {
    id: 6,
    title: "DrumKit Game App",
    description:
      "JavaScript App that allows users to make music using tools provided.",
    image: "/images/projects/proj-6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Alexinha/DrumKit",
    previewUrl: "https://alexinha.github.io/DrumKit/",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChang = (newTage) => {
    setTag(newTage);
  };

  const filteredProjects = PROJ_DATA.filter((proj) => proj.tag.includes(tag));

  // console.log(filteredProjects);

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChang}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChang}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChang}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      {filteredProjects.length !== 0 ? (
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((p) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              description={p.description}
              imgUrl={p.image}
              tags={p.tag}
              gitUrl={p.gitUrl}
              previewUrl={p.previewUrl}
            />
          ))}
        </div>
      ) : (
        <div>
          {" "}
          <p className="text-white flex justify-center mt-10">
            Coming soon! &#x2661;
          </p>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
