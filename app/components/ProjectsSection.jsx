import React from "react";
import ProjectCard from "./ProjectCard";

const PROJ_DATA = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "proj 1 description",
    image: "/images/projects/proj-1.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: "proj 1 description",
    image: "/images/projects/proj-2.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React Portfolio Website",
    description: "proj 1 description",
    image: "/images/projects/proj-3.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "React Portfolio Website",
    description: "proj 1 description",
    image: "/images/projects/proj-4.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Portfolio Website",
    description: "proj 1 description",
    image: "/images/projects/proj-5.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "React Portfolio Website",
    description: "proj 1 description",
    image: "/images/projects/proj-6.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];
const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <button className="rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer">
          All
        </button>
        <button className="rounded-full border-2 border-slate-500 hover:border-white px-6 py-3 text-xl cursor-pointer">
          Web
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {PROJ_DATA.map((p) => (
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
    </>
  );
};

export default ProjectsSection;
