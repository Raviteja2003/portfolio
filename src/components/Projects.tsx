import React from "react";
import projectsData from "./data/projects";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  return (
    <div className="py-20" id="projects">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="px-3 py-1 text-sm font-medium text-orange-800 bg-blue-100 rounded-full">
              💼 My Work
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            Featured Projects
          </h1>
          <p className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-600">
            Explore my featured projects below.
          </p>
          <div className="w-20 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              image={project.image}
              techStack={project.techStack}
              deployedLink={project.deployedLink || ""}
              githubURL={project.githubURL}
            />
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="mt-16 text-center">
          <p className="mb-6 text-gray-600">Interested in working together?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-xl hover:scale-105"
          >
            Let&apos;s Collaborate
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
