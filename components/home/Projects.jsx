import Image from "next/image";
import Link from "next/link";
import React from "react";

function Projects({ projects }) {
  const Btn = (link) => (
    <button className="bg-amber-500 text-white mt-6 px-3 py-2 rounded-sm  hover:bg-white hover:text-amber-500 hover:border-[.01rem] hover:border-amber-500 scale-90 hover:scale-75">
      <Link href={`${link}`}> View Project</Link>
    </button>
  );
  return (
    <section id="Portfolio" className="h-fit">
      <div className="w-screen m-2 md:mx-auto md:w-10/12">
        <div className="flex flex-col md:flex-row justify-between items-center  ">
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl font-black  text-slate-800 mt-2 tracking-wide leading-normal md:leading-tight">
              Our Recent
              <br /> Design Projects.
            </h1>
          </div>
          <button
            className={`mt-8 md:mt-1 border-[.01rem] border-amber-500 px-3 py-2 rounded-sm text-amber-500 hover:bg-amber-500 hover:text-white`}
          >
            See Our Portfolio
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 pt-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="h-96 bg-gray-300"
              style={{
                backgroundImage: `url(${project.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Btn link={`${project.link}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
