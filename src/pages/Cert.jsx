import React from "react";
import Nav from "../layouts/Nav";

const certifications = [
  {
    id: 1,
    title: "Software Development",
    issuer: "Teach2give",
    date: "2024",
    description: "Comprehensive certification in modern web development technologies and practices.",
    skills: ["Js", "React", "Node.js", "MongoDB", "Express"],
    link: "https://drive.google.com/file/d/1g5dhNjA9nfx7OeztRr5KcbopAakiwV4S/view?usp=sharing"
  },
  {
    id: 2,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    description: "Foundational understanding of AWS Cloud services and architecture.",
    skills: ["AWS", "Cloud Computing", "DevOps"],
    link: "https://www.credly.com/badges/a26937ef-0f5b-4dd6-ac26-7143f0c88929/linked_in_profile"
  },
  {
    id: 3,
    title: "PHP PDO",
    issuer: "Udemy",
    date: "2023",
    description: "Certification in PHP PDO.",
    skills: ["PHP", "PDO", "MySQL"],
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-4ec331ee-1558-4d2d-9cc2-853a57437549.jpg"
  },
];


export default function Certifications() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-dark dark:text-light mb-4">
          Certifications
        </h1>
        <p className="text-lg text-secondary dark:text-light/80 max-w-2xl mx-auto">
          Professional certifications and achievements that demonstrate my
          expertise and commitment to continuous learning.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {certifications.map((cert) => (
          <a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="card p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-dark dark:text-light">
                    {cert.title}
                  </h3>
                  <p className="text-accent">{cert.issuer}</p>
                </div>
                <span className="text-sm text-secondary dark:text-light/60">
                  {cert.date}
                </span>
              </div>

              <p className="text-secondary dark:text-light/80 mb-4">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Additional Achievements */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-dark dark:text-light mb-6 text-center">
          Additional Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="text-lg font-semibold text-dark dark:text-light mb-2">
              Online Courses
            </h3>
            <ul className="space-y-2 text-secondary dark:text-light/80">
              <li>• Advanced JavaScript - Udemy</li>
              <li>• React Native Development - Coursera</li>
              <li>• UI/UX Design Fundamentals - Google</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold text-dark dark:text-light mb-2">
              Industry Recognition
            </h3>
            <ul className="space-y-2 text-secondary dark:text-light/80">
              <li>• Zoho Partners Certification 2025</li>
              <li>• Open Source Contributor</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
