import React, { useState } from "react";
import "./Part2.css";

function OurClasses() {
  // Veriler
  const titles = [
    "Why are Your Yoga?",
    "Why you shouldn't work with a group",
    "Train Solo, Shine Strong!",
    "Stretch Your Limits",
  ];

  const images = [
    "./src/assets/images/yoga.jpg",
    "./src/assets/images/group.webp",
    "./src/assets/images/solo.jpg",
    "./src/assets/images/stret.webp",
  ];

  const times = [
    "When comes Your Yoga Time",
    "When comes Your Group Time",
    "When comes Your Solo Time",
    "When comes Your Stretching Time",
  ];

  // Aktif seçili index
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="container-classes">
      <div className="container container-section" id="classes">
        <div className="small-box">
          <h1>OUR CLASSES</h1>
          <span className="line"></span>
          <p>
            Lorem ipsum dolor sit amet. Reprehenderit commodi at quaerat nulla
            possimus deserunt et iure minus consequatur ducimus?
          </p>
        </div>

        <div className="classes">
          <div className="buttons">
            {["Yoga", "Group", "Solo", "Stretching"].map((label, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`btn ${activeIndex === index ? "active" : ""}`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="content-wrapper">
            <div className="content-text col-lg-6">
              <h3>{titles[activeIndex]}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis impedit assumenda aspernatur ipsam quo, error
                repellendus. Corrupti nihil in doloremque fugiat officiis,
                quisquam minus, blanditiis repellat voluptas impedit cumque
                consectetur?
              </p>
              <h3>{times[activeIndex]}</h3>
              <p>Saturday-Sunday: 8:00am - 10:00am</p>
              <p>Monday-Tuesday: 10:00am - 12:00pm</p>
              <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
            </div>

            <div className="content-images col-lg-6">
              <img
                src={images[activeIndex]}
                alt="class visual"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurClasses;
