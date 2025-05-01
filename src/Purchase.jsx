import React from "react";
import "./Part3.css";

function Purchase() {
  return (
    <section className="container container-section" id="purchase">
      <div className="small-box">
        <h1>PURCHASE FROM US</h1>
        <span className="line"></span>
        <p>
          Lorem ipsum dolor sit amet . Reprehenderit commodi at quaerat nulla
          possimus deserunt et iure minus consequatur ducimus?
        </p>
      </div>
      <div className="purchase">
        <div className="card">
          <img src="./src/assets/images/purchase1.jpg" alt="" />
          <div className="card-text">
            <h5>Kettlebel / 5kg</h5>
            <p>
              <span style={{ textDecoration: "line-through" }}>88,90$</span>
              /59,99$
            </p>
            <a href="#">
              <i className="bi bi-cart"></i> Add to cart
            </a>
          </div>
        </div>
        <div className="card">
          <img src="./src/assets/images/purchase2.jpg" alt="" />
          <div className="card-text">
            <h5>Treadmill</h5>
            <p>
              <span style={{ textDecoration: "line-through" }}>899,99$</span>
              /599,90$
            </p>
            <a href="#">
              <i className="bi bi-cart"></i> Add to cart
            </a>
          </div>
        </div>
        <div className="card">
          <img src="./src/assets/images/purchase3.jpg" alt="" />
          <div className="card-text">
            <h5>Adjustable Dumbbell</h5>
            <p>
              <span style={{ textDecoration: "line-through" }}>88,90$</span>
              /59,99$
            </p>
            <a href="#">
              <i className="bi bi-cart"></i> Add to cart
            </a>
          </div>
        </div>
        <div className="card">
          <img src="./src/assets/images/purchase4.jpg" alt="" />
          <div className="card-text">
            <h5>Kettlebel / 5kg</h5>
            <p>
              <span style={{ textDecoration: "line-through" }}>89,90$</span>
              /59,99$
            </p>
            <a href="#">
              <i className="bi bi-cart"></i> Add to cart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Purchase;
