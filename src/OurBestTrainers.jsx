import React from "react";
import "./Part3.css";

function OurBestTrainers() {
  return (
    <section className="container-trainers" id="trainers">
      <div className="container container-section">
        <div className="small-box">
          <h1>OUR BEST TRAINERS</h1>
          <span className="line"></span>
          <p>
            Lorem ipsum dolor sit amet . Reprehenderit commodi at quaerat nulla
            possimus deserunt et iure minus consequatur ducimus?
          </p>
        </div>
        <div className="trainers ">
          <div className="trainer-wrapper">
            <div className="side-box">
              <img
                src="./src/assets/images/trainer1.jpg"
                alt=""
                className="Yoga Trainer Emily Johnson"
                loading="lazy"
              />
              <div className="trainer-info">
                <h5>Emily Johnson</h5>
                <p>Yoga Trainer</p>
              </div>
            </div>
          </div>
          <div className="trainer-wrapper">
            <div className="side-box">
              <img
                src="./src/assets/images/trainer2.jpg"
                alt="Conditioning Trainer John Smith"
                loading="lazy"
              />
              <div className="trainer-info">
                <h5>John Smith</h5>
                <p>Conditioning Trainer</p>
              </div>
            </div>
          </div>

          <div className="trainer-wrapper">
            <div className="side-box">
              <img
                src="./src/assets/images/trainer3.jpg"
                alt=" Cardio Trainer Jane Doe"
                loading="lazy"
              />
              <div className="trainer-info">
                <h5>Jane Doe</h5>
                <p>Cardio Trainer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurBestTrainers;
