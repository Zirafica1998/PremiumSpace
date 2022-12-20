import React, {useEffect, useState} from 'react'
import axios from 'axios';
import MessageBox from '../../MessageBox';

export default function MyFormEdit(data) {
  const [id,setId] = useState(data.data.id)
  const [naslov, setNaslov] = useState(data.data.naslov);
  const [text, setText] = useState(data.data.text);
  const [allow, setAllow] = useState(data.data.allow);
  const [success, setSuccess] = useState(false);



  const addBlog = () =>{
    var data = {
        id:id,
        title:naslov,
        text:text,
        allow:allow
    }
    axios.post("http://localhost:3001/blog/edit", data).then((response) => {
        if(response.status == 200){
          setSuccess(true)
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
        {success && <MessageBox  text="Uspesno ste izmenili strucni tekst" refresh={true}></MessageBox>}
        <div className="formContainer">
                <div className="content-form">
                  {/* NASLOV */}
                  <label>Naslov</label>
                  <input type="text" id="naslov" name='naslov' defaultValue={data.data.title} onChange={(event) => {setNaslov(event.target.value);}} ></input>
                  {/* OPIS */}
                  <label>Tekst</label>
                  <textarea name='text' id='text' defaultValue={data.data.text} onChange={(event) => {setText(event.target.value);}}></textarea>
                  {/* VIDLJIVOST */}
                  <div className='allow'>
                    <label>Vidljivost</label>
                    {data.data.allow ?(
                    <input type="checkbox" id="vidljivost" name='vidljivost' defaultChecked onChange={(event) => {setAllow(event.target.checked);}}></input>
                    ): (
                    <input type="checkbox" id="vidljivost" name='vidljivost' onChange={(event) => {setAllow(event.target.checked);}}></input> 
                    )}
                  </div>
                </div>
                <div className="button-section">
                    <button onClick={addBlog}>Azuriraj blog</button>
                </div>
        </div>
    </div>
  )
}
