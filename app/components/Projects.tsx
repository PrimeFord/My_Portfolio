"use client";
import React, { useState } from "react";
import { projectData } from "../utility/data";
import "./Projects.css";
import Image from "next/image";

const Projects = () => {
  const [fullString, setFullString] = useState(false);
  const trauncateString = (string: string) => {
    return `${string.substr(0, 85)}...`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2rem]">
      {projectData.map((e, i) => (
        <div
          key={i}
          className="view" //border: 10px solid #fff margin: 10px;
        >
          <Image
            className="bac"
            src={e.img}
            alt={e.title}
            height={240}
            width={352}
          />
          <div className="mask">
            <h2 className="">{e.title}</h2>
            <p className="mb-1 lg:mb-2">{trauncateString(e.desc)}</p>
            <h3 className="not-italic text-[0.9rem] mb-2 lg:mb-2">
              Tools: {e.tools}
            </h3>
            <a href={e.link} rel="noopener" className="underline">
              View Website
            </a>
            <a
              href={e.github}
              rel="noopener"
              className="absolute flex hover:underline bottom-4 lg:bottom-2 left-2"
            >
              <Image
                src="./images/github-f.svg"
                alt={e.title}
                className="w-8 h-8 animate-bounce"
                height={32}
                width={32}
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
