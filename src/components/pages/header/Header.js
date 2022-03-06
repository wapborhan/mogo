import React from "react";

export default function Header() {
  return (
    <section id="header">
      <div className="header"></div>
      <div className=" container dex">
        <div className="row main-head">
          <div className="col-lg-4 logo">
            <img src="images/logo.png" alt="" />
          </div>
          <div className="col-lg-8 menu">
            <nav className="main-menu">
              <ul>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Work</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Icon</a>
                </li>
                <li>
                  <a href="">Icon 2</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center head-content">
            <h2>Creative Template</h2>
            <h5>Welcome</h5>
            <h6>to MoGo</h6>
            <button>Learn more</button>
          </div>
        </div>
        <div className="row head-foot">
          <div className="col-lg-3 col-md-6 col-sm-12 head-count">
            01 <span>Intro</span>{" "}
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 head-count">
            02 <span>Work</span>{" "}
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 head-count">
            03 <span>About</span>{" "}
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 head-count">
            04 <span>Contacts</span>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
