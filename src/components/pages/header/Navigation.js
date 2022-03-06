import React from "react";

export default function Navigation() {
  return (
    <div className="row main-head">
      <div className="col-lg-4 logo">
        <img src="images/logo.png" alt="" />
      </div>
      <div className="col-lg-8 menu">
        <nav className="main-menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="3">Story</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Design</a>
            </li>
            <li>
              <a href="">Work</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href=""> Clients</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
