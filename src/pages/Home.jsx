import React from "react";
import Nav from "../layouts/Nav";
import "../index.css";
import { useSpring, animated } from "react-spring";
import isaac from "../assets/isaac.png";
import { Link } from "react-router-dom";

function Num({ n }) {
  const props = useSpring({
    from: { number: 0 },
    to: { number: n },
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.span>{props.number.to((n) => Math.floor(n))}</animated.span>;
}

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-light dark:to-dark"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark dark:text-light mb-6">
              Hi, I'm <span className="text-accent">Isaac Warui</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-secondary dark:text-light/80 mb-8 max-w-2xl mx-auto">
              A passionate full-stack developer focused on creating beautiful and functional web applications
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/projects"
                className="btn"
              >
                View Projects
              </Link>
              <Link
                to="/experiance"
                className="btn bg-dark dark:bg-light text-light dark:text-dark hover:bg-opacity-90"
              >
                My Experience
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="section">
        <h2 className="text-3xl font-bold text-dark dark:text-light mb-8 text-center">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "JavaScript",
            "React",
            "Node.js",
            "PHP",
            "Python",
            "SQL",
            "MongoDB",
            "Git",
            "AWS",
          ].map((skill) => (
            <div
              key={skill}
              className="card flex items-center justify-center p-4 text-center"
            >
              <span className="text-lg font-medium text-dark dark:text-light">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="section">
        <h2 className="text-3xl font-bold text-dark dark:text-light mb-8 text-center">
          Quick Links
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/projects" className="card group">
            <h3 className="text-xl font-bold text-dark dark:text-light mb-2">
              Projects
            </h3>
            <p className="text-secondary dark:text-light/80">
              View my portfolio of web applications and software projects
            </p>
            <span className="mt-4 inline-block text-accent group-hover:translate-x-2 transition-transform">
              →
            </span>
          </Link>
          <Link to="/experiance" className="card group">
            <h3 className="text-xl font-bold text-dark dark:text-light mb-2">
              Experience
            </h3>
            <p className="text-secondary dark:text-light/80">
              Explore my professional journey and work history
            </p>
            <span className="mt-4 inline-block text-accent group-hover:translate-x-2 transition-transform">
              →
            </span>
          </Link>
          <Link to="/certifications" className="card group">
            <h3 className="text-xl font-bold text-dark dark:text-light mb-2">
              Certifications
            </h3>
            <p className="text-secondary dark:text-light/80">
              Check out my professional certifications and achievements
            </p>
            <span className="mt-4 inline-block text-accent group-hover:translate-x-2 transition-transform">
              →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
