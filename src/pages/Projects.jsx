import React from "react";
import Nav from "../layouts/Nav";
import "../css/Projects.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <Nav />
      <h1 style={{ display: "flex", justifyContent: "center" }}>My Projects</h1>
      <div class="grid_container">
        <div class="grid_container_1">
          <div class="profile">
            <div class="name">
              <h1>Trip Craft</h1>
              <h3>Php, Laravel, MySQL</h3>
              <p>
                Trip-Craft is a user-friendly platform designed to help you
                effortlessly plan and explore leisure trips. Discover
                destinations, organize your itinerary, and make the most of your
                free time with ease.
              </p>
              <Link to="/tcproj">View more</Link>
            </div>
          </div>
        </div>
        <div class="grid_container_2">
          <div class="profile">
            <div class="name">
              <h1>Play Games</h1>
              <h3>JavaScript , React, Express JS, MongoDB, Node JS</h3>
              <p>
                “ I started as a total newbie with virtually no coding skills. I
                now work as a mobile engineer for a big company. This was one of
                the best investments I’ve made in myself. ”
              </p>
              <Link to="/playG">View more</Link>
            </div>
          </div>
        </div>
        <div class="grid_container_3">
          <div class="profile">
            <div class="name">
              <h1>Chat App</h1>
              <h3>Javascript , React, Node JS, MongoDB</h3>
              <p>
                Simple chat app to understand Websockets and how to use them to
                create a chat application.
              </p>
              <Link to="/chatproj">View more</Link>
            </div>
          </div>
        </div>
        <div class="grid_container_4">
          <div class="profile">
            <div class="name">
              <h1>Notebook</h1>
              <h3>Php, Laravel</h3>
              <p>
                Take note and store them in a database. You can also edit and
                delete them.
              </p>
              <Link to="noteproj">View more</Link>
            </div>
          </div>
        </div>
        <div class="grid_container_5">
          <div class="profile">
            <div class="name">
              <h1>Car WebApp</h1>
              <h3>Php, Laravel, MySQL</h3>
              <p>
                “ The staff seem genuinely concerned about my progress which I
                find really refreshing. The program gave me the confidence
                necessary to be able to go out in the world and present myself
                as a capable junior developer. The standard is above the rest.
                You will get the personal attention you need from an incredible
                community of smart and amazing people. ”
              </p>
              <Link to="car">View more</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
