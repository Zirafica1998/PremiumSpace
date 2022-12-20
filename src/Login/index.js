import React, { useState, useContext } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import MessageBox from "../MessageBox";
import { StepContext } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setAuthState} = useContext(AuthContext);
  const [errors,setError] = useState(false);
  const [textAlert,setTextAlert] = useState("");
  let history = useNavigate();

  const login = () => {
    const data = { email: email, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error){
        setTextAlert(response.data.error);
        setError(true);
      }else{
        localStorage.setItem("accessToken",response.data.token);
        setAuthState({
          email:response.data.email,
          id:response.data.id,
          status:true
        });
        history('/admin');
      }
    });
  };
  return (
    <>
        {errors && <MessageBox text={textAlert} refresh={false}></MessageBox>}
        <div className="loginContainer">
        <label>Email:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          } } />
        <label>Password:</label>
        <input
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          } } />

        <button onClick={login}> Login </button>
      </div>
    </>
  );
}

export default Login;
