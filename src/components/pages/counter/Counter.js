import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function Counter() {
  return (
    <section id="counter" className="main-counter">
      <div className="container text-center">
        <div className="d-flex justify-content-around">
          <div className="counter">
            <h2 className="timer count-title count-number">
              <CountUp end={42} duration={5} />
            </h2>
            <p className="count-text ">Web Design Projects</p>
          </div>

          <div className="counter">
            <h2 className="timer count-title count-number">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div style={{ height: 100 }}>
                    {isVisible ? <CountUp end={36} duration={5} /> : null}
                  </div>
                )}
              </VisibilitySensor>
            </h2>
            <p className="count-text ">Happy Clients</p>
          </div>

          <div className="counter">
            <h2 className="timer count-title count-number">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div style={{ height: 100 }}>
                    {isVisible ? <CountUp end={15} duration={5} /> : null}
                  </div>
                )}
              </VisibilitySensor>
            </h2>
            <p className="count-text ">award winner</p>
          </div>

          <div className="counter">
            <h2 className="timer count-title count-number">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div style={{ height: 100 }}>
                    {isVisible ? <CountUp end={99} duration={5} /> : null}
                  </div>
                )}
              </VisibilitySensor>
            </h2>
            <p className="count-text ">cup of coffee</p>
          </div>

          <div className="counter">
            <h2 className="timer count-title count-number">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div style={{ height: 100 }}>
                    {isVisible ? (
                      <CountUp end={24} duration={5} delay={0} />
                    ) : null}
                  </div>
                )}
              </VisibilitySensor>
            </h2>
            <p className="count-text ">members</p>
          </div>
        </div>
      </div>
    </section>
  );
}
