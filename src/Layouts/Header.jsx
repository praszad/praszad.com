import React, { Component } from 'react';

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header class='header navbar-fixed-top'>
          <nav class='navbar' role='navigation'>
            <div class='container'>
              <div class='menu-container js_nav-item'>
                <button
                  type='button'
                  class='navbar-toggle'
                  data-toggle='collapse'
                  data-target='.nav-collapse'
                >
                  <span class='sr-only'>Toggle navigation</span>
                  <span class='toggle-icon'></span>
                </button>
                <div class='logo'>
                  <a class='logo-wrap' href='#body'>
                    <img
                      class='logo-img logo-img-main'
                      src='img/logo.png'
                      alt='Asentus Logo'
                    />
                    <img
                      class='logo-img logo-img-active'
                      src='img/logo-dark.png'
                      alt='Asentus Logo'
                    />
                  </a>
                </div>
              </div>

              <div class='collapse navbar-collapse nav-collapse'>
                <div class='menu-container'>
                  <ul class='nav navbar-nav navbar-nav-right'>
                    <li class='js_nav-item nav-item'>
                      <a class='nav-item-child nav-item-hover' href='#root'>
                        Home
                      </a>
                    </li>
                    <li class='js_nav-item nav-item'>
                      <a class='nav-item-child nav-item-hover' href='#about'>
                        About
                      </a>
                    </li>
                    <li class='js_nav-item nav-item'>
                      <a
                        class='nav-item-child nav-item-hover'
                        href='#experience'
                      >
                        Experience
                      </a>
                    </li>
                    {/* <li class="js_nav-item nav-item">
                      <a class="nav-item-child nav-item-hover" href="#work">
                        Work
                      </a>
                    </li> */}
                    <li class='js_nav-item nav-item'>
                      <a class='nav-item-child nav-item-hover' href='#contact'>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div
          class='promo-block parallax-window'
          data-parallax='scroll'
          data-image-src='img/1920x1080/01.jpg'
        >
          <div class='container'>
            <div class='row'>
              <div class='col-sm-6'>
                <div class='promo-block-divider'>
                  <h1 class='promo-block-title'>
                    Prasad <br />
                    Babu
                  </h1>
                  <p class='promo-block-text'>Web Developer</p>
                </div>
                <ul class='list-inline'>
                  <li>
                    <a href='https://github.com/praszad' class='social-icons'>
                      <i class='icon-social-github'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.facebook.com/impraszad'
                      class='social-icons'
                    >
                      <i class='icon-social-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/praszad' class='social-icons'>
                      <i class='icon-social-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.linkedin.com/in/praszad'
                      class='social-icons'
                    >
                      <i class='icon-social-linkedin'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
