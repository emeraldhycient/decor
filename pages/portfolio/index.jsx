import Link from "next/link";
import { useState } from "react";
import Navbar from "../../components/navbar";
import Project from "../../components/portfolio/project";
import Layout from "../../components/layout";

function Index() {
  const [projects, setprojects] = useState([
    { id: 45, link: "/portfolio/port1", src: "/images/apart2.png" },
    { id: 56, link: "/portfolio/port2", src: "/images/apart4.png" },
    { id: 23, link: "/portfolio/port3", src: "/images/apart3.png" },
    { id: 34, link: "/portfolio/port4", src: "/images/apart1.png" },
    { id: 21, link: "/portfolio/port5", src: "/images/apart2.png" },
    { id: 2, link: "/portfolio/port6", src: "/images/apart4.png" },
    { id: 40, link: "/portfolio/port7", src: "/images/apart3.png" },
    { id: 25, link: "/portfolio/port8", src: "/images/apart1.png" },
  ]);

  return (
    <Layout>
      <Navbar />
      <div className="mt-6 md:w-10/12 mx-2 md:mx-auto  flex justify-between items-center">
        <select className="bg-white border-2 border-gray-200 focus:outline-none focus:border-blue-500 text-base px-4 py-2  rounded-sm">
          <option>All</option>
          <option>Ongoing</option>
          <option>Finished</option>
          <option>pending</option>
        </select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:w-10/12 mx-2 md:mx-auto mt-4 md:mt-6">
        {projects.map((project) => (
          <Project key={project.id} link={project.link} image={project.src} />
        ))}
      </div>
    </Layout>
  );
}

export default Index;
