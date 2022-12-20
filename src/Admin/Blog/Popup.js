
import React from "react";
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
