import React, { useState } from "react";
import "./Part2.css";

function BmiCalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [arrowPosition, setArrowPosition] = useState(0);

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      alert("Lütfen geçerli bir boy ve kilo girin!");
      return;
    }

    const bmi = w / (h * h);
    console.log("BMI:", bmi);

    let position = 0;
    if (bmi < 18.5) {
      position = 20;
    } else if (bmi < 24.9) {
      position = 32;
    } else if (bmi < 29.9) {
      position = 47;
    } else if (bmi < 34.9) {
      position = 62;
    } else {
      position = 76;
    }

    setArrowPosition(position);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      calculateBMI();
    }
  };

  return (
    <section className="container container-section" id="bmi">
      <div className="bmi">
        <div className="col-lg-5">
          <h3>BMI CALCULATOR</h3>
          <p style={{ paddingBottom: "20px" }}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>

          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Your height"
          />
          <span>cm</span>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Your weight"
          />
          <span>kg</span>
        </div>

        <div className="bmi-content-images col-lg-6">
          <p style={{ textAlign: "center", fontSize: "18px", margin: 0 }}>
            Your BMI
          </p>
          <div className="bmi-image-container">
            <img
              src="./src/assets/images/bmi-index.jpg"
              alt="BMI Scale"
              className="bmi-image img-fluid"
            />
            <div id="bmi-arrow" style={{ left: `${arrowPosition}%` }}>
              🔺
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BmiCalculator;
