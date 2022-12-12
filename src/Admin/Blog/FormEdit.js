import React, {useEffect, useState} from 'react'
import { storage } from '../../helpers/firebase';
import axios from 'axios';
import {v4} from "uuid"

export default function MyFormEdit(data) {
  const [id,setId] = useState(data.data.id)
  const [naslov, setNaslov] = useState(data.data.naslov);
  const [text, setText] = useState(data.data.text);
  const [allow, setAllow] = useState(data.data.allow);



  const addBlog = () =>{
    var data = {
        id:id,
        title:naslov,
        text:text,
        allow:allow
    }
    axios.post("http://localhost:3001/blog/edit", data).then((response) => {
        if(response.status == 200){
          window.location.reload(false);
        }else{
          alert("Greska")
        }
    })
}




  useEffect(() => {
    var nextId;
    if(nextId == undefined){
        axios.get("http://localhost:3001/realEstate/nextId").then((response) => {
            if(response.status == 200){
              nextId=response.data['AUTO_INCREMENT'];
            }
        });
    }
    
  });

  return (
    <div>
        <div className="formContainer">
                <div className="content-form">
                  {/* NASLOV */}
                  <label>Naslov</label>
                  <input type="text" id="naslov" name='naslov' defaultValue={data.data.title} onChange={(event) => {setNaslov(event.target.value);}} ></input>
                  {/* OPIS */}
                  <label>Tekst</label>
                  <textarea name='text' id='text' defaultValue={data.data.text} onChange={(event) => {setText(event.target.value);}}></textarea>
                  {/* VIDLJIVOST */}
                  <label>Vidljivost</label>
                  {data.data.allow ?(
                  <input type="checkbox" id="vidljivost" name='vidljivost' defaultChecked onChange={(event) => {setAllow(event.target.checked);}}></input>
                  ): (
                  <input type="checkbox" id="vidljivost" name='vidljivost' onChange={(event) => {setAllow(event.target.checked);}}></input> 
                  )}
                </div>
                <div className="button-section">
                    <button onClick={addBlog}>Azuriraj blog</button>
                </div>
        </div>
    </div>
  )
}
