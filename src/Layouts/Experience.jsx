import React, { Component } from "react";

class Experience extends Component {
  state = {};
  render() {
    return (
      <div id="experience">
        <div class="bg-color-sky-light" data-auto-height="true">
          <div class="container content-lg">
            <div class="row">
              <div class="col-sm-3 sm-margin-b-30">
                <div class="text-right sm-text-left">
                  <h2 class="margin-b-0">Experience</h2>
                  <p>Having Good Experience In.</p>
                </div>
              </div>
              <div class="col-sm-8 col-sm-offset-1">
                <div class="row row-space-2 margin-b-4">
                  <div class="col-md-4 md-margin-b-4">
                    <div class="service" data-height="height">
                      <div class="service-element">
                        <i class="service-icon icon-chemistry"></i>
                      </div>
                      <div class="service-info">
                        <h3>HTML5/CSS3</h3>
                        <p class="margin-b-5">
                          Having proficient knowledge in HTML
                        </p>
                      </div>
                      <a href="#" class="content-wrapper-link"></a>
                    </div>
                  </div>
                  <div class="col-md-4 md-margin-b-4">
                    <div
                      class="service bg-color-base wow zoomIn"
                      data-height="height"
                      data-wow-duration=".3"
                      data-wow-delay=".1s"
                    >
                      <div class="service-element">
                        <i class="service-icon color-white icon-screen-tablet"></i>
                      </div>
                      <div class="service-info">
                        <h3 class="color-white">JavaScript</h3>
                        <p class="color-white margin-b-5">
                          Started with Angular 2 and worked in Angular 6+, then
                          moved to ReactJs.
                        </p>
                      </div>
                      <a href="#" class="content-wrapper-link"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
