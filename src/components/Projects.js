import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-800 bg-white body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-800">
            Resume
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Adaptable to changing priorities, possess excellent troubleshooting
            skills under stress and tight schedules. Able to work independently
            and manage time efficiently while meeting project goals.
          </p>
        </div>
        <div className="flex flex-col w-full mb-20">
          {projects.map((project) => (
            <div className="flex column sm:w-100 w-100 p-4">
              <div className="px-8 py-10 w-full border rounded border-gray-200">
                <h3 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                  {project.title}
                </h3>
                <h1 className="title-font text-md font-medium text-black mb-3">
                  {project.companyName + " "}
                  <span className="title-font text-xs font-medium text-gray-400 mb-3">
                    ({project.datesEmployed})
                  </span>
                </h1>
                <p className="leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
