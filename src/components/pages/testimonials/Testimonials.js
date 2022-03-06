import React from "react";

export default function Testimonials() {
  return (
    <section id="testomonials">
      <div className="container clients-main">
        <div className="lead-testimonial-cont">
          <div className="lead-tstmnl-slider">
            <div className="lead-tstmnl-slide d-flex">
              <div className="lead-tstmnl-img">
                <img src="images/clients.png" />
              </div>
              <div className="lead-tstmnl-text-cont">
                <span className="lead-tstmnl-comment">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.”
                </span>
                <div className="lead-tstmnl-nm-dsg">
                  <h2>Salman Khan</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
