import React from "react";
import "./Part1.css";

function HeaderSection() {
  return (
    <section className="home" id="homeSection">
      <div className="container">
        <div className="section section-title">
          <span
            className="blue-box"
            style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)" }}
          >
            POWERFULL
          </span>
          <h1>
            Group <br />
            Practise <br />
            With Trainers
          </h1>
          <p
            className="lead"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "9px" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est non ab
            architecto, minima velit eum autem corrupti quidem veritatis, nemo
            ea modi laborum neque eaque iste reiciendis consectetur ducimus in.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
            alias.
          </p>
        </div>
        <div className="home-buttons container">
          <button className="btn btn-custom">Sign up</button>
          <button className="btn btn-custom2">Details</button>
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
