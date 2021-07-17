import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center text-gray-800">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Hi, I'm Eitan.
            <br className="hidden lg:inline-block" />I am an JAVA/J2EE, ASP .NET, C# and Vue.js developer
          </h1>
          <p className="mb-8 leading-relaxed">
            Developer with extensive experience in full life cycle of software development including requirements definition, design, implementation, testing and deployment. Experienced in enterprise applications development, distributed systems, high-performance computing, system integration, security, data management, messaging, web services and other technologies and frameworks. Self motivated, highly organized and self directed team player that also works well independently. Adaptable to changing priorities; possess excellent troubleshooting skills under stress and tight schedules. Able to work independently and manage time efficiently while meeting project goals
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-200 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}