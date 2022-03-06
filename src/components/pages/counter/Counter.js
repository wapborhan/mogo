import React from "react";

export default function Counter() {
  return (
    <section id="counter" className="main-counter">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-6 offset-1">
            <div className="counter">
              <h2
                className="timer count-title count-number"
                data-to="42"
                data-speed="1500"
              >
                40
              </h2>
              <p className="count-text ">Web Design Projects</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="counter">
              <h2
                className="timer count-title count-number"
                data-to="23"
                data-speed="1500"
              >
                23
              </h2>
              <p className="count-text ">Happy Clients</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="counter">
              <h2
                className="timer count-title count-number"
                data-to="15"
                data-speed="1500"
              >
                150
              </h2>
              <p className="count-text ">award winner</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="counter">
              <h2
                className="timer count-title count-number"
                data-to="99"
                data-speed="1500"
              >
                99
              </h2>
              <p className="count-text ">cup of coffee</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="counter">
              <h2
                className="timer count-title count-number"
                data-to="24"
                data-speed="1500"
              >
                24
              </h2>
              <p className="count-text ">members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
