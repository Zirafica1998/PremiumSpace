import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 name">
                    <h2>Premium <span>Space</span></h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 offset-md-4 mobileNumber">
                <a href="tel:7078155908">(707) 815-5908</a>|<a href="#">Kontakt</a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 offset-md-4 logo">
                    <img src="/logo-v6.png" alt="image" />
                </div>
            </div>
        </div>
      </footer>
    );
  }
}
