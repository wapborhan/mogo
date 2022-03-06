import React from "react";

export default function Blog() {
  return (
    <section id="blog">
      <div className="container">
        <div className="row blog-head text-center">
          <div className="col-lg-12">
            <h2>our stories</h2>
            <h5>leatest blog</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="blog-iteam">
              <div className="blog-image">
                <img src="images/blog-1.jpg" alt="" />
              </div>
              <div className="blog-date">
                <h2>
                  15 <span>Jan</span>
                </h2>
              </div>
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
              <div className="comment">
                <h3>
                  {" "}
                  <i className="fa fa-clock" aria-hidden="true"></i> 542
                </h3>
                <h3>
                  {" "}
                  <i className="fa fa-clock" aria-hidden="true"></i> 17
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-iteam">
              <div className="blog-image">
                <img src="images/blog-1.jpg" alt="" />
              </div>
              <div className="blog-date">
                <h2>
                  15 <span>Jan</span>
                </h2>
              </div>
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
              <div className="comment">
                <h3>
                  {" "}
                  <i className="fa fa-clock" aria-hidden="true"></i> 542
                </h3>
                <h3>
                  {" "}
                  <i className="fa fa-clock" aria-hidden="true"></i> 17
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-iteam">
              <div className="blog-image">
                <img src="images/blog-1.jpg" alt="" />
              </div>
              <div className="blog-date">
                <h2>
                  15 <span>Jan</span>
                </h2>
              </div>
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
              <div className="comment">
                <h3>
                  {" "}
                  <i className="fa fa-clock" aria-hidden="true"></i> 542
                </h3>
                <h3>
                  {" "}
                  <i className="fa fa-clock" aria-hidden="true"></i> 17
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
