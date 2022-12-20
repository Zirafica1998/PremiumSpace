import React, { Component } from "react";
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from "react-i18next";


export default function Footer() {
  const { t } = useTranslation();

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
                <a href="tel:7078155908">(707) 815-5908</a>|<a href="/kontakt">{t("contact")}</a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 offset-md-4 logo">
                    <img src="/logo-v7.png" alt="image" />
                </div>
            </div>
        </div>
        <div className="container">
          <ul className="reserver">
            <li><Link to="/admin" target="_blank"><span>admin</span></Link></li>
            <li><span>©2022 All Rights Reserved by WebX</span></li>
          </ul>
        </div>
      </footer>
    )
}
