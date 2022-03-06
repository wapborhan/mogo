import React, { Component } from "react";
import Accordion from "./According";

export default class ServicesDesc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }
  render() {
    return (
      <section id="services-dis">
        <div className="container">
          <div className="row services-dis-head text-center">
            <div className="col-lg-12">
              <h2>For all devices</h2>
              <h5>unique design</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
          </div>
          <div className="row services-dis-body">
            <div className="col-lg-6 services-dis-img">
              <img src="images/services-dis-img.jpg" alt="" />
            </div>
            <div className="col-lg-6 services-dis-text">
              <Accordion
                className="accordion"
                selectedIndex={this.state.selectedIndex}
                onChange={(index, expanded, selectedIndex) =>
                  console.log(
                    `#${index} ${
                      expanded ? "expanded" : "collapsed"
                    } (selectedIndex: ${selectedIndex})`
                  )
                }
              >
                <div
                  data-header="Super simple accordion example"
                  className="accordion-item"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc sed metus tincidunt, sagittis lorem elementum, blandit
                    enim. Etiam in quam eu felis tempus pellentesque. Etiam ac
                    massa vel justo suscipit vehicula quis sit amet risus. Nam
                    luctus, sem et aliquam consectetur, nisl sapien auctor ex,
                    vel tristique lectus orci et mi.
                  </p>
                  <p>
                    Maecenas aliquam rutrum lectus at consectetur. Nullam
                    finibus imperdiet risus, eu accumsan magna scelerisque in.
                    In hac habitasse platea dictumst. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Ut convallis sollicitudin orci eget interdum.
                    Pellentesque pharetra pulvinar dui, vel commodo massa
                    faucibus sed.
                  </p>
                  <p>
                    Suspendisse laoreet elementum elementum. Nulla porttitor
                    ligula sit amet egestas malesuada. Nam suscipit convallis
                    mauris non vulputate. Maecenas auctor lacinia mi accumsan
                    commodo. Nunc mollis, felis vel finibus rutrum, tellus dolor
                    ultrices odio, et volutpat massa erat at leo. Pellentesque
                    quis metus rutrum, elementum lorem vel, semper nulla.
                  </p>
                  <p>
                    Etiam a eros risus. Fusce vitae neque ac est faucibus
                    venenatis. Praesent non turpis in massa iaculis cursus in ut
                    ante. Aliquam libero nunc, porta in bibendum a, imperdiet
                    imperdiet purus. Morbi tincidunt convallis tellus ac
                    laoreet. Ut facilisis placerat orci non malesuada. Fusce
                    eget augue sed nulla tempus iaculis.
                  </p>
                  <p>
                    Sed sed justo vestibulum, lobortis magna sed, consectetur
                    erat. Etiam aliquam metus at purus posuere, a dictum est
                    auctor. Morbi quis felis vehicula, feugiat ex quis,
                    tincidunt ligula. Ut vitae nunc ullamcorper, interdum quam
                    vitae, porta eros. Praesent quis finibus erat, vel rutrum
                    lacus. Aenean at mauris finibus turpis interdum condimentum
                    in in ligula. Duis aliquam quis nulla nec pellentesque. Sed
                    pulvinar lectus nec ligula consequat, id convallis leo
                    efficitur. Donec non congue nulla.
                  </p>
                </div>
                <div
                  data-header="Fully responsive, ofc"
                  className="accordion-item"
                >
                  <p>
                    Quisque molestie luctus erat a sagittis. Praesent blandit,
                    arcu sed dictum ornare, metus lorem faucibus enim, sit amet
                    molestie sem augue eget metus. Aliquam varius justo neque,
                    iaculis dapibus enim faucibus in. Maecenas tempus auctor
                    neque vitae viverra. Cras vel pellentesque nibh. Fusce
                    lacinia nisi quis dolor hendrerit malesuada a quis purus.
                    Integer efficitur mi dignissim dui aliquam ultricies. Etiam
                    facilisis ullamcorper erat. Nunc leo elit, dapibus quis
                    lorem non, aliquet fermentum tellus.
                  </p>
                </div>
                <div
                  data-header="Btw, this guy has a nested accordion"
                  className="accordion-item"
                >
                  <p>
                    Quisque molestie luctus erat a sagittis. Praesent blandit,
                    arcu sed dictum ornare, metus lorem faucibus enim, sit amet
                    molestie sem augue eget metus. Aliquam varius justo neque,
                    iaculis dapibus enim faucibus in. Maecenas tempus auctor
                    neque vitae viverra. Cras vel pellentesque nibh. Fusce
                    lacinia nisi quis dolor hendrerit malesuada a quis purus.
                    Integer efficitur mi dignissim dui aliquam ultricies. Etiam
                    facilisis ullamcorper erat. Nunc leo elit, dapibus quis
                    lorem non, aliquet fermentum tellus.
                  </p>
                </div>
              </Accordion>
              {/* <div id="accordion">
                <div className="card">
                  <div
                    className="card-header btn btn-link"
                    id="headingOne"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <div className="card-texts d-flex">
                      <i className="fa fa-clock" aria-hidden="true"></i>
                      <h5 className="mb-0">photography</h5>
                    </div>
                  </div>
  
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header btn btn-link collapsed"
                    id="headingTwo"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <div className="card-texts d-flex">
                      <i className="fa fa-clock" aria-hidden="true"></i>
                      <h5 className="mb-0">creativity</h5>
                    </div>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header btn btn-link collapsed"
                    id="headingThree"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <div className="card-texts d-flex">
                      <i className="fa fa-clock" aria-hidden="true"></i>
                      <h5 className="mb-0">web design</h5>
                    </div>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
