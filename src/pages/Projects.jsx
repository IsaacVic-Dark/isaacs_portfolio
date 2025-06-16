import React from "react";
import Nav from "../layouts/Nav";
// import "../css/Projects.css";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Kenya Tax Calculator",
    url: "/src/assets/ketaxdesktop.png",
    description:
      "Calculates monthly income tax based on Kenya's progressive KRA tax system.",
    path: "/tcproj",
    tech: ["HTML", "CSS3", "PHP"],
  },
  {
    id: 2,
    title: "Playground Games",
    url: "",
    description:
      "Interactive gaming platform built with modern web technologies",
    path: "/playG",
    tech: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    id: 3,
    title: "Payroll Management System",
    url: "",
    description:
      "A comprehensive solution for handling employee payroll processes.",
    path: "/chatproj",
    tech: ["TailwindCSS", "MySQL", "PHP"],
  },
  {
    id: 4,
    title: "Note Taking App",
    url: "",
    description: "Simple and elegant note-taking application",
    path: "/noteproj",
    tech: ["React", "LocalStorage", "Markdown"],
  },
  {
    id: 5,
    title: "Car Rental System",
    url: "",
    description: "Full-stack car rental management system",
    path: "/car",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
];

export default function Projects() {
  return (
    <>
      <Nav />
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-dark dark:text-light mb-4">
            My Projects
          </h1>
          <p className="text-lg text-secondary dark:text-light/80 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project
            demonstrates different skills and technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.path}
              className="card group hover:shadow-xl"
            >
              <div className="h-48 bg-accent/10 rounded-lg mb-4 flex items-center justify-center">
                {/* <span className="text-4xl">🚀</span> */}
                <img
                  src={project.url}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-dark dark:text-light mb-2">
                {project.title}
              </h3>
              <p className="text-secondary dark:text-light/80 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center text-accent group-hover:translate-x-2 transition-transform">
                View Project
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
