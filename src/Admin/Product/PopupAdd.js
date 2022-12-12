
import React, {useCallback,useState} from "react";
import { Formik, Form, Field, ErrorMessage,useField } from "formik";
import DatePicker from "react-datepicker";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import MyForm from "./Form";


const dropzoneStyle = {
  width: "100%",
  height: "auto",
  borderWidth: 2,
  borderColor: "rgb(102, 102, 102)",
  borderStyle: "dashed",
  borderRadius: 5,
}

const MyDatePicker = ({ name = ""}) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <DatePicker
      {...field}
      selected={value}
      onChange={(date) => setValue(date)}
    />
  );
};

const handleSubmit = (data) => {
    axios.post("http://localhost:3001/realEstate/add", data).then((response) => {
    if(response.status == 200){
      window.location.reload(false);
    }else{
      alert("Greska")
    }
  });
}




const PopupAdd = props => {
    
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <div className="details">
            <div className="createPostPage">
                <h3>Dodaj proizvod</h3>
                <MyForm action="add"></MyForm>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PopupAdd;
