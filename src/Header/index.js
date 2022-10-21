import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-md-3 logo">
                    <img src="/logo-v6.png" alt="image" />
                </div>
                <nav className="col-md-6 offset-md-3 links ">
                    <ul>
                        <li><a>Link 1</a></li>
                        <li><a>Link 2</a></li>
                        <li><a>Link 3</a></li>
                    </ul>
                </nav>
            </div>
        </div>
      </header>
    );
  }
}
