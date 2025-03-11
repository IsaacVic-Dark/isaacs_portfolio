import React from "react";
import Nav from "../layouts/Nav";
import "../css/style.css";
import { useSpring, animated } from "react-spring";

function Num({ n }) {
  const props = useSpring({
    from: { number: 0 },
    to: { number: n },
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.span>{props.number.to((n) => Math.floor(n))}</animated.span>;
}

function Home() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="box">
          <div style={{}}>
            <p className="" style={{ fontSize: "30px" }}>
              Hello, I`m
            </p>
            <h1 className="" style={{ fontSize: "80px" }}>
              Isaac <span style={{ color: "#666" }}>Warui</span>
            </h1>
            <p className="" style={{ fontSize: "30px" }}>
              Software Developer
            </p>
          </div>
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "300px",
              height: "300px",
            }}
          >
            <h1>Image Here</h1>
          </div>
        </div>
        <div className="box home_footer">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <h2>
              <Num n={3} />
            </h2>
            <p>Experience</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <h2>
              <Num n={3} />
            </h2>
            <p>Projects</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <h2>
              <Num n={2} />
            </h2>
            <p>Certifications</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <h2>
              <Num n={4} />
            </h2>
            <p>Languages</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
