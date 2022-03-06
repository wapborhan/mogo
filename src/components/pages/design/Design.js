import React from "react";

export default function Design() {
  return (
    <section
      id="unique"
      style={{
        backgroundImage: `url("images/unique-bg.jpg")`,
      }}
    >
      <div className="unique"></div>
      <div className="container">
        <div className="row unique-head text-center">
          <div className="col-lg-12">
            <h2>For all devices</h2>
            <h5>unique design</h5>
          </div>
        </div>
        <div className="unique-iteam">
          <div className="unique-big-img">
            <img src="images/mobile-big.png" alt="" />
          </div>
          <div className="unique-small-img">
            <img src="images/mobile-small.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
