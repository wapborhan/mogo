import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center about-head">
            <h2>What We Do</h2>
            <h5>Story about us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </div>
        </div>
        <div className="row about-imgs">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="about-iteam">
              <div className="about-imag">
                <img src="images/about_part-1.png" alt="" />
              </div>
              <div className="team-overlay">
                <div className="team-social">
                  <a href="#">
                    <i className="fa fa-user"></i>
                  </a>
                  <h4>super team</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="about-iteam">
              <div className="about-imag">
                <img src="images/about_part-2.png" alt="" />
              </div>
              <div className="team-overlay">
                <div className="team-social">
                  <a href="#">
                    <i className="fa fa-user"></i>
                  </a>
                  <h4>super team</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="about-iteam">
              <div className="about-imag">
                <img src="images/about_part-3.png" alt="" />
              </div>
              <div className="team-overlay">
                <div className="team-social">
                  <a href="#">
                    <i className="fa fa-user"></i>
                  </a>
                  <h4>super team</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
