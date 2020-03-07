import React, { Component } from 'react';

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header className='header navbar-fixed-top'>
          <nav className='navbar' role='navigation'>
            <div className='container'>
              <div className='menu-container js_nav-item'>
                <button
                  type='button'
                  className='navbar-toggle'
                  data-toggle='collapse'
                  data-target='.nav-collapse'
                >
                  <span className='sr-only'>Toggle navigation</span>
                  <span className='toggle-icon'></span>
                </button>
                <div className='logo'>
                  <a className='logo-wrap' href='#body'>
                    <img
                      className='logo-img logo-img-main'
                      src='img/logo.png'
                      alt='Asentus Logo'
                    />
                    <img
                      className='logo-img logo-img-active'
                      src='img/logo-dark.png'
                      alt='Asentus Logo'
                    />
                  </a>
                </div>
              </div>

              <div className='collapse navbar-collapse nav-collapse'>
                <div className='menu-container'>
                  <ul className='nav navbar-nav navbar-nav-right'>
                    <li className='js_nav-item nav-item'>
                      <a className='nav-item-child nav-item-hover' href='#root'>
                        Home
                      </a>
                    </li>
                    <li className='js_nav-item nav-item'>
                      <a
                        className='nav-item-child nav-item-hover'
                        href='#about'
                      >
                        About
                      </a>
                    </li>
                    <li className='js_nav-item nav-item'>
                      <a
                        className='nav-item-child nav-item-hover'
                        href='#experience'
                      >
                        Experience
                      </a>
                    </li>
                    {/* <li className="js_nav-item nav-item">
                      <a className="nav-item-child nav-item-hover" href="#work">
                        Work
                      </a>
                    </li> */}
                    <li className='js_nav-item nav-item'>
                      <a
                        className='nav-item-child nav-item-hover'
                        href='#contact'
                      >
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
          className='promo-block parallax-window'
          data-parallax='scroll'
          data-image-src='img/1920x1080/01.jpg'
        >
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='promo-block-divider'>
                  <h1 className='promo-block-title'>
                    Prasad <br />
                    Babu
                  </h1>
                  <p className='promo-block-text'>Web Developer</p>
                </div>
                <ul className='list-inline'>
                  <li>
                    <a
                      target='_blank'
                      href='https://github.com/praszad'
                      className='social-icons'
                    >
                      <i className='icon-social-github'></i>
                    </a>
                  </li>

                  <li>
                    <a
                      target='_blank'
                      href='https://www.facebook.com/impraszad'
                      className='social-icons'
                    >
                      <i className='icon-social-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target='_blank'
                      href='https://twitter.com/praszad'
                      className='social-icons'
                    >
                      <i className='icon-social-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target='_blank'
                      href='https://www.linkedin.com/in/praszad'
                      className='social-icons'
                    >
                      <i className='icon-social-linkedin'></i>
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
