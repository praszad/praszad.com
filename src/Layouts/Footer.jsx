import React, { Component } from 'react';

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className='footer'>
        <div className='content container'>
          <div className='row'>
            <div className='col-xs-6'>
              <img
                className='footer-logo'
                src='img/logo-dark.png'
                alt='Praszad Logo'
              />
            </div>
            <div className='col-xs-6 text-right sm-text-left'>
              <p className='margin-b-0'>
                <a className='fweight-700' href='index.html'>
                  Praszad
                </a>{' '}
                Theme Powered by:{' '}
                <a
                  className='fweight-700'
                  href='link=http://www.keenthemes.com/'
                >
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
