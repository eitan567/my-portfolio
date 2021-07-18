import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { resume } from "../data";

export default function Resume() {
  return (
    <section id="resume" className="text-gray-800 bg-white body-font">
      <div className="container px-5 py-20 mx-auto text-center lg:px-60">
        <div className="flex flex-col w-full mb-10">
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
        <div className="flex flex-col w-full mb-10">
          {resume.map((resumeElement) => (
            <div className="flex column sm:w-100 w-100 p-2 text-left">
              <div className="px-8 py-10 w-full border rounded border-gray-200">
                <h1 className="title-font text-xs font-medium text-gray-400 mb-3">
                  {resumeElement.datesEmployed}
                </h1>
                <h3 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                  {resumeElement.title}
                </h3>
                <h1 className="title-font text-md font-medium text-black mb-3">
                  {resumeElement.companyName}
                </h1>
                <p className="leading-relaxed">
                  {resumeElement.description.length > 1 ? (
                    <ul
                      className={
                        resumeElement.description.length > 1 ? "list-disc" : ""
                      }
                    >
                      {resumeElement.description.map((line) => (
                        <li>{line}</li>
                      ))}
                    </ul>
                   ) : 
                    resumeElement.description[0]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
