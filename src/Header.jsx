import React, { useEffect } from "react";
import "./Header.css";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("header");
      if (!navbar) return;

      const viewportHeight = window.innerHeight;

      var scrollPosition = window.scrollY;
      if (scrollPosition >= viewportHeight) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <header id="header" className="fixed-top">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src="./src/assets/images/logo.png"
                alt="logo"
                className="logo-img"
              />
            </a>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#homeSection">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#classes">
                    Class
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#trainers">
                    Trainers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#review">
                    Review
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
              <button className="btn btn-warning ms-3">
                <a
                  href="#contact"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Join us
                </a>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
