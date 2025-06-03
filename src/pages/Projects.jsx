import React from "react";
import Nav from "../layouts/Nav";
// import "../css/Projects.css";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Task Tracker",
    description: "A React-based task management application with CRUD operations",
    path: "/tcproj",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Playground Games",
    description: "Interactive gaming platform built with modern web technologies",
    path: "/playG",
    tech: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    id: 3,
    title: "Chat Application",
    description: "Real-time chat application with WebSocket integration",
    path: "/chatproj",
    tech: ["React", "Socket.io", "Express"],
  },
  {
    id: 4,
    title: "Note Taking App",
    description: "Simple and elegant note-taking application",
    path: "/noteproj",
    tech: ["React", "LocalStorage", "Markdown"],
  },
  {
    id: 5,
    title: "Car Rental System",
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
            Here are some of the projects I've worked on. Each project demonstrates different skills and technologies.
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
                <span className="text-4xl">🚀</span>
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
