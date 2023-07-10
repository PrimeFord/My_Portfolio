import { projectData } from "@/app/utility/data";
import React from "react";

const Project = () => {
  return (
    <div className="w-[12rem] font-[500] text-left lg:text-center">
      <h2 className="text-[1.15rem] font-[700] mb-5">Projects</h2>
      <div className="flex flex-col gap-2">
        {projectData.map((e, i) => (
          <a key={i} href={e.link} rel="noopener">
            <p className="text-[0.9rem] hover:text-[1.15rem]">{e.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
