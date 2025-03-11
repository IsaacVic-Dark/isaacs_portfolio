import React from "react";
import Nav from "../layouts/Nav";
import "../css/style.css";

function Exp() {
  return (
    <>
      <Nav />
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        My Education
      </h1>
      <div className="container">
        <div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div className="">
              <h2
                style={{
                  border: "3px solid black",
                  display: "inline-block",
                  padding: "1rem",
                }}
              >
                2020 - 2024
              </h2>
              <h2 className="">Laikipia University</h2>
              <p>
                I graduated with a degree in{" "}
                <span style={{ color: "#666", fontWeight: "bold" }}>
                  Computer Science
                </span>{" "}
                at Laikipia University, where I developed a strong foundation in
                software development, algorithms, data structures, and system
                architecture. Throughout my studies, I gained hands-on
                experience in programming languages such as Php, Python, and
                Javascript, while also exploring areas like artificial
                intelligence, databases and cybersecurity.
              </p>
            </div>
            <div className="">
              <h2
                style={{
                  border: "3px solid black",
                  display: "inline-block",
                  padding: "1rem",
                }}
              >
                2016 - 2019
              </h2>
              <h2 className="">Anestar Boys High-school Lanet</h2>
              <p>
                I completed my high school education in Anestar Boys Lanet,
                where I developed a strong foundation in mathematics, sciences,
                and technology. My academic journey fueled my passion for
                problem-solving and software development, paving the way for my
                career in tech.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div className="">
              <h2
                style={{
                  border: "3px solid black",
                  display: "inline-block",
                  padding: "1rem",
                }}
              >
                2013 - 2015
              </h2>
              <h2 className="">Nakuru Elite Educational Center</h2>
              <p>
                I completed my primary school education in Kenya, where I built
                a strong foundation in mathematics, science, and language
                studies. This period nurtured my curiosity, discipline, and
                problem-solving skills, setting the stage for my academic and
                professional growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exp;
