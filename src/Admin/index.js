import React, { useEffect } from 'react'
import { AuthContext } from '../helpers/AuthContext';
import {useState} from "react"
import axios from 'axios';
import Login from '../Login';
import Products from "./Product/Products"

export default function Admin() {
    const [authState, setAuthState] = useState({
      email:"",
      id:0,
      status: false
    });
    useEffect(() => {
        axios
          .get("http://localhost:3001/auth/auth", {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          })
          .then((response) => {
            if (response.data.error) {
              setAuthState({...authState,status:false});
            } else {
              setAuthState({
                email:response.data.email,
                id:response.data.id,
                status:true
              });
            }
          });
      }, []);

    return(
       <div>
            <AuthContext.Provider value={{ authState, setAuthState }}>
                <>
                {authState.status ? (
                   <Products></Products>
                ):(
                    <>
                        <Login></Login>
                    </>
                )}
                </>
                
            </AuthContext.Provider>
       </div>
    )
}
