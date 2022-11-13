import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className={"header "+ this.props.class}>
        <div className="container head">
            <div className="row">
                <div className="col-md-3 logo">
                    <a href="/"><img src="/logo-v7.png" alt="image" /></a>
                </div>
                <nav className="col-md-7 offset-md-2 links ">
                    <ul className="menu-primary-navigation">
                        <li className="menu-item"><a href="/"><span>Premium Space</span></a></li>
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
