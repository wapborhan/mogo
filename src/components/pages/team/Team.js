import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaGithubSquare,
} from "react-icons/fa";

export default function Team() {
  return (
    <section id="teams">
      <div className="container">
        <div className="row team-head text-center">
          <div className="col-lg-12">
            <h2>who we are</h2>
            <h5>meet our team</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 team-main-iteam">
            <div className="team-iteam">
              <div className="team-image">
                <img src="images/team1.jpg" alt="" />
                <div className="team-overlay">
                  <div className="team-social">
                    <ul>
                      <li>
                        <a href="">
                          <FaFacebookSquare />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <FaTwitterSquare />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <FaPinterestSquare />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <FaGithubSquare />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="team-content text-center">
                <h2>Matthew dex</h2>
                <h5>graphics design</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 team-main-iteam">
            <div className="team-iteam">
              <div className="team-image">
                <img src="images/team2.jpg" alt="" />
                <div className="team-overlay">
                  <div className="team-social">
                    <ul>
                      <li>
                        <a href="">
                          <FaFacebookSquare />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <FaTwitterSquare />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <FaPinterestSquare />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <FaGithubSquare />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="team-content text-center">
                <h2>Christopher Campbell</h2>
                <h5>Branding/UX design</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 team-main-iteam">
            <div className="team-iteam">
              <div className="team-image">
                <img src="images/team3.jpg" alt="" />
                <div className="team-overlay">
                  <div className="team-social">
                    <ul>
                      <li>
                        <a href="">
                          <FaFacebookSquare />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <FaTwitterSquare />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <FaPinterestSquare />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <FaGithubSquare />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="team-content text-center">
                <h2>Michael Fertig </h2>
                <h5>Developer</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
