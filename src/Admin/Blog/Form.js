import React, {useEffect, useState} from 'react'
import {storage} from '../../helpers/firebase';
import {ref, uploadBytes,uploadBytesResumable, deleteObject,getStorage,listAll  } from 'firebase/storage'
import axios from 'axios';
import {v4} from "uuid";
import $ from "jquery";

export default function MyForm() {

  //VALUE FROM INPUT
  const [naslov, setNaslov] = useState("");
  const [text, setText] = useState("");
  const [allow, setAllow] = useState(false);



  const addBlog = () =>{
    var data = {
        title:naslov,
        text:text,
        allow:allow,
    }
    axios.post("http://localhost:3001/blog/add", data).then((response) => {
        if(response.status == 200){
          alert("Uspesno ste dodali strucni tekst");
          window.location.reload(false);
        }else{
        alert("Greska");
        }
    })
}


  return (
    <div>
        <div className="formContainer">
                <div className="content-form">
                  {/* NASLOV */}
                  <label>Naslov</label>
                  <input type="text" id="naslov" name='naslov' placeholder='Unesite naslov...' onChange={(event) => {setNaslov(event.target.value);}} ></input>
                  {/* OPIS */}
                  <label>Tekst</label>
                  <textarea name='text' id='text' placeholder='Unesite tekst...' onChange={(event) => {setText(event.target.value);}}></textarea>
                  {/* VIDLJIVOST */}
                  <label>Vidljivost</label>
                  <input type="checkbox" id="vidljivost" name='vidljivost' onChange={(event) => {setAllow(event.target.checked);}}></input>
                </div>
                <div className="button-section">
                    <button onClick={addBlog}>Dodaj strucni tekst</button>
                </div>
        </div>
    </div>
  )
}
