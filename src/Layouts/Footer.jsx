import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer class="footer">
        <div class="content container">
          <div class="row">
            <div class="col-xs-6">
              <img
                class="footer-logo"
                src="img/logo-dark.png"
                alt="Praszad Logo"
              />
            </div>
            <div class="col-xs-6 text-right sm-text-left">
              <p class="margin-b-0">
                <a class="fweight-700" href="index.html">
                  Praszad
                </a>{" "}
                Theme Powered by:{" "}
                <a class="fweight-700" href="link=http://www.keenthemes.com/">
                  KeenThemes.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
