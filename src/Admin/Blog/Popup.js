
import React, {useCallback,useState} from "react";
import { Formik, Form, Field, ErrorMessage,useField } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import {useDropzone} from 'react-dropzone'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import "react-datepicker/dist/react-datepicker.css";
import MyFormEdit from "./FormEdit";



const Popup = props => {  
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <div className="details">
          <div className="createBlogPage">
            <h3>Strucni tekst broj {props.content.id}</h3>
            <MyFormEdit data={props.content}></MyFormEdit>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
