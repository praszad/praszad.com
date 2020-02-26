import React, { Component } from 'react';

class Contact extends Component {
  state = {};
  render() {
    return (
      <div id='contact'>
        <div class='bg-color-sky-light'>
          <div class='container content-lg'>
            <div class='row'>
              <div class='col-sm-3 sm-margin-b-30'>
                <div class='text-right sm-text-left'>
                  <h2 class='margin-b-0'>Contacts</h2>
                  <p>Find me...</p>
                </div>
              </div>
              <div class='col-sm-8 col-sm-offset-1'>
                <div class='row'>
                  <div class='col-md-3 col-xs-6 md-margin-b-30'>
                    <h5>Location</h5>
                    <a href='#'>Chennai</a>
                  </div>
                  <div class='col-md-3 col-xs-6 md-margin-b-30'>
                    <h5>Phone</h5>
                    <a href='#'>+91 7373 5292 36</a>
                  </div>
                  <div class='col-md-3 col-xs-6'>
                    <h5>Email</h5>
                    <a href='mailto:#'>impraszad@gmail.com</a>
                  </div>
                  <div class='col-md-3 col-xs-6'>
                    <h5>Web</h5>
                    <a href='https://praszad.com/'>https://praszad.com</a>
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

export default Contact;
