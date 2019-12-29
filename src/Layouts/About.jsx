import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div id="about">
        <div class="container content-lg">
          <div class="row">
            <div class="col-sm-3 sm-margin-b-30">
              <div class="text-right sm-text-left">
                <h2 class="margin-b-0">Intro</h2>
                <p>What I am all about.</p>
              </div>
            </div>
            <div class="col-sm-8 col-sm-offset-1">
              <div class="margin-b-60">
                <p>
                  I'm Prasad Babu, a developer with 2+ years of experience in
                  web development. Worked in complete life cycle of an project.
                </p>
                <p>
                  Started my career as an hardware engineer then migrated myself
                  to an <b>Web Developer</b>. In the early stages worked as an
                  PHP developer for few months then completely moved to{" "}
                  <b>JavaScript</b>.
                </p>
              </div>

              <div class="progress-box">
                <h5>
                  HTML5 <span class="color-heading pull-right">96%</span>
                </h5>
                <div class="progress">
                  <div
                    class="progress-bar bg-color-base"
                    role="progressbar"
                    data-width="96"
                  ></div>
                </div>
              </div>
              <div class="progress-box">
                <h5>
                  JavaSript <span class="color-heading pull-right">82%</span>
                </h5>
                <div class="progress">
                  <div
                    class="progress-bar bg-color-base"
                    role="progressbar"
                    data-width="82"
                  ></div>
                </div>
              </div>
              <div class="progress-box">
                <h5>
                  Angular <span class="color-heading pull-right">62%</span>
                </h5>
                <div class="progress">
                  <div
                    class="progress-bar bg-color-base"
                    role="progressbar"
                    data-width="62"
                  ></div>
                </div>
              </div>
              <div class="progress-box">
                <h5>
                  ReactJs <span class="color-heading pull-right">86%</span>
                </h5>
                <div class="progress">
                  <div
                    class="progress-bar bg-color-base"
                    role="progressbar"
                    data-width="86"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
