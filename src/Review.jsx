import React from "react";
import "./Part4.css";

function Review() {
  return (
    <section className="review" id="review">
      <div className="container container-section">
        <div className="small-box">
          <h1>REVIEW CLIENT</h1>
          <span className="line"></span>
          <p>
            Lorem ipsum dolor sit amet . Reprehenderit commodi at quaerat nulla
            possimus deserunt et iure minus consequatur ducimus?
          </p>
        </div>
        <div className="comment">
          {/* Client 1 */}
          <div>
            <div className="client">
              <img src="/src/assets/images/client1.jpg" alt="Client 1" />
              <div>
                <h6>Diet Expert</h6>
                <span style={{ fontWeight: "100", fontSize: "14px" }}>CFO</span>
              </div>
            </div>
            <div>
              <p className="triangle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                aliquam quia praesentium omnis veniam in officiis voluptatem,
                assumenda maxime. Modi tempora veniam blanditiis, impedit cum
                libero recusandae qui dolorem reprehenderit!
              </p>
            </div>
          </div>

          {/* Client 2 */}
          <div>
            <div className="client">
              <img src="/src/assets/images/client2.jpg" alt="Client 2" />
              <div>
                <h6>Diet Expert</h6>
                <span style={{ fontWeight: "100", fontSize: "14px" }}>CFO</span>
              </div>
            </div>
            <div>
              <p className="triangle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                aliquam quia praesentium omnis veniam in officiis voluptatem,
                assumenda maxime. Modi tempora veniam blanditiis, impedit cum
                libero recusandae qui dolorem reprehenderit!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
