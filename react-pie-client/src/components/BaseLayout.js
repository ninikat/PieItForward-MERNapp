import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';


export class BaseLayout extends Component {
  render() {
    return (
      <div className="container_test">
      <Header /> {this.props.children}
      <Footer />
      </div>
    )
  }
}


export class Header extends Component {
  render() {
    return (
      <div className="header_container" style={{backgroundColor : '#E8E9EB'}}>
            <p className="logo_text App">PIE IT FORWARD</p>
          <div className="header_menu">
              <div  className="li_style">
            <Link className="menu_links" to = '/'>HOME</Link>
              </div>

              <div  className="li_style">
            <Link className="menu_links" to = '/redeem'>REDEEM</Link>
              </div>

              <div  className="li_style">
            <Link className="menu_links" to = '/account'>ACCOUNT</Link>
              </div>
          </div>

      </div>
    )
  }
}

export class Footer extends Component {
  render() {
    return (
      <div className="footer_container">
      <div className="footer_style">
      <p className="footer_text"> PIZZA KARMA 2018</p>
      </div>
      </div>
    )
  }
}
