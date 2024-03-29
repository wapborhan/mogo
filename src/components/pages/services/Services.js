import React from "react";
import {
  FaClock,
  FaDesktop,
  FaBook,
  FaChartBar,
  FaHome,
  FaCalculator,
} from "react-icons/fa";

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="row services-head text-center">
          <div className="col-lg-12">
            <h2>We work with</h2>
            <h5>Amazing Services</h5>
          </div>
        </div>
        <div className="row row-col-lg-3 row-col-md-6 ser-1sec">
          <div className="col-lg-4 col-sm-12 ">
            <div className="ser-iteam">
              <div className="serv-left">
                <FaClock />
              </div>
              <div className="serv-Right">
                <h2>Photography</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 ">
            <div className="ser-iteam">
              <div className="serv-left">
                <FaChartBar />
              </div>
              <div className="serv-Right">
                <h2>Web Design</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 ">
            <div className="ser-iteam">
              <div className="serv-left">
                <FaDesktop />
              </div>
              <div className="serv-Right">
                <h2>Creativity</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row ser-2sec">
          <div className="col-lg-4 col-sm-12 ">
            <div className="ser-iteam">
              <div className="serv-left">
                <FaBook />
              </div>
              <div className="serv-Right">
                <h2>Seo</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 ">
            <div className="ser-iteam">
              <div className="serv-left">
                <FaHome />
              </div>
              <div className="serv-Right">
                <h2>CSS/HTML</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 ">
            <div className="ser-iteam">
              <div className="serv-left">
                <FaCalculator />
              </div>
              <div className="serv-Right">
                <h2>Digital</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
