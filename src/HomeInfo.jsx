import React from "react";
import "./Part1.css";

function HomeInfo() {
  return (
    <section className="info-section">
      <div className="container info ">
        <div className="section-box">
          <p>325</p>
          <h5>Course</h5>
        </div>
        <div className="section-box">
          <p>405</p>
          <h5>Work out</h5>
        </div>
        <div className="section-box">
          <p>305</p>
          <h5>Working Hour</h5>
        </div>
        <div className="section-box">
          <p>705</p>
          <h5>Happy Client</h5>
        </div>
      </div>
    </section>
  );
}

export default HomeInfo;
