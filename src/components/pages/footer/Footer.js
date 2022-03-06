import React from "react";

export default function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <div className="row foot-main">
          <div className="col-lg-4 foot-left-iteam">
            <div className="foot-logo">
              <img src="images/foot-logo.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{" "}
              </p>
            </div>
            <h3>
              15k <span>Flowers</span>
            </h3>
            <div className="foot-social">
              <ul>
                <li>Flow US :</li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="foot-subs">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Mail"
                  aria-label="mail"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    SUBSCRIBE
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 blog">
            <h2>blog</h2>
            <div className="row foot-blog">
              <div className="row foot-blog-iteam">
                <div className="col-lg-5 foot-blog-img">
                  <img src="images/foot-blog-1.jpg" alt="" />
                </div>
                <div className="col-lg-7 foot-blog-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Soluta deserunt nemo maiores{" "}
                  </p>
                  <h5>jan 9 2016</h5>
                </div>
              </div>
              <div className="row foot-blog-iteam">
                <div className="col-lg-5 foot-blog-img">
                  <img src="images/foot-blog-2.jpg" alt="" />
                </div>
                <div className="col-lg-7 foot-blog-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Soluta deserunt nemo maiores{" "}
                  </p>
                  <h5>jan 9 2016</h5>
                </div>
              </div>
              <div className="row foot-blog-iteam">
                <div className="col-lg-5 foot-blog-img">
                  <img src="images/foot-blog-3.jpg" alt="" />
                </div>
                <div className="col-lg-7 foot-blog-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Soluta deserunt nemo maiores{" "}
                  </p>
                  <h5>jan 9 2016</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 instagram">
            <h2>instagram</h2>
            <div className="row foot-ins">
              <div className="col-lg-4 foot-inst-img">
                <img src="images/ins/ins-1.jpg" alt="" />
              </div>
              <div className="col-lg-4 foot-inst-img">
                <img src="images/ins/ins-2.jpg" alt="" />
              </div>
              <div className="col-lg-4 foot-inst-img">
                <img src="images/ins/ins-3.jpg" alt="" />
              </div>
            </div>
            <div className="row foot-ins">
              <div className="col-lg-4 foot-inst-img">
                <img src="images/ins/ins-4.jpg" alt="" />
              </div>
              <div className="col-lg-4 foot-inst-img">
                <img src="images/ins/ins-5.jpg" alt="" />
              </div>
              <div className="col-lg-4 foot-inst-img">
                <img src="images/ins/ins-6.jpg" alt="" />
              </div>
            </div>
            <div className="row foot-ins">
              <div className="col-lg-4 foot-inst-img">
                <img src="images/ins/ins-3.jpg" alt="" />
              </div>
              <div className="col-lg-4 foot-inst-img">
                <img src="images/ins/ins-2.jpg" alt="" />
              </div>
              <div className="col-lg-4 foot-inst-img">
                <img src="images/ins/ins-1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row credits-main">
          <div className="col-lg-12 text-center credit">
            <h2>
              © 2016 MoGo free PSD template by <span>Laaqiq</span>
            </h2>
            <h1 className="animate__animated animate__rollIn text-center">
              Design By{" "}
              <a
                className="linksl kukuri"
                href="http://www.facebook.com/borhan.biswas/"
              >
                <i className="fas fa-heart"></i>
                Borhan Uddin
                <i className="fas fa-heart"></i>
              </a>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
