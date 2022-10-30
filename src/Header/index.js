import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container head">
            <div className="row">
                <div className="col-md-3 logo">
                    <img src="/logo-v7.png" alt="image" />
                </div>
                <nav className="col-md-7 offset-md-2 links ">
                    <ul className="menu-primary-navigation">
                        <li className="menu-item"><a><span>Premium Space</span></a></li>
                        <li className="menu-item"><a><span>Kreditni savetnik</span></a></li>
                        <li className="menu-item"><a><span>O nama</span></a></li>
                        <li className="menu-item"><a><span>Strucni tekstovi</span></a></li>
                        <li className="menu-item"><a><span>Kontakt</span></a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="container text-banner">
          <h1>Pronađi idealnu nekretninu za sebe!</h1>
        </div>
      </header>
    );
  }
}
