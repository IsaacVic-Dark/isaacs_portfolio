import React from "react";
import Nav from "../layouts/Nav";
// import "../css/style.css";

const experiences = [
  {
    id: 1,
    title: "PHP Developer",
    company: "Redian Softwar Ltd",
    period: "2025 - Present",
    description: "Customize and enhance SuiteeCRM solutions to meet customer-specific requireements esing PHP, optimzing workflows nd improving CRM functionality.",
    skills: ["Angular", "PHP", "MySQL", "Git"],
  },
  {
    id: 2,
    title: "Software Developer",
    company: "Teach2give",
    period: "May 2024 - August 2024",
    description: "Build backend systems with Node.js, Express and also managed database using SQL, MySQL and MongoDB.",
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "Git"],
  },
  {
    id: 3,
    title: "Graphics Designer",
    company: "Lixnet tech",
    period: "2023 - 2024",
    description: "Created posters for the company and responsive UI designs using figma and canvas.",
    skills: ["Figma", "Canvas", "UI/UX Design"],
  },
];

export default function Experience() {
  return (
    <>
      <Nav />
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-dark dark:text-light mb-4">
            Professional Experience
          </h1>
          <p className="text-lg text-secondary dark:text-light/80 max-w-2xl mx-auto">
            My journey in software development, showcasing growth and achievements in various roles.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 sm:pl-32 py-6 group">
              {/* Timeline line */}
              <div className="absolute top-0 left-0 sm:left-20 h-full w-px bg-accent/20 group-last:h-6"></div>

              {/* Timeline dot */}
              <div className="absolute left-0 sm:left-20 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-accent bg-white dark:bg-secondary"></div>

              {/* Content */}
              <div className="card">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 mb-1">
                  <h3 className="text-xl font-bold text-dark dark:text-light">
                    {exp.title}
                  </h3>
                  <span className="text-accent font-medium">{exp.company}</span>
                </div>
                
                <p className="text-sm text-secondary dark:text-light/60 mb-4">
                  {exp.period}
                </p>
                
                <p className="text-secondary dark:text-light/80 mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-dark dark:text-light mb-6 text-center">
            Core Competencies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Frontend Development",
              "Backend Development",
              "Database Design",
              "API Development",
              "Cloud Services",
              "UI/UX Design",
            ].map((skill) => (
              <div
                key={skill}
                className="card flex items-center justify-center p-4 text-center"
              >
                <span className="text-dark dark:text-light">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
