import React, {useEffect, useState} from 'react'
import { storage } from '../../helpers/firebase';
import {ref, uploadBytes,uploadBytesResumable, deleteObject,getStorage,listAll  } from 'firebase/storage'
import axios from 'axios';
import {v4} from "uuid"
import { data } from 'jquery';
import MessageBox from '../../MessageBox';

export default function MyFormEdit(data) {
  const [id,setId] = useState(data.data.id)
  const [nextId, setNextId] = useState("");
  const [progress, setProgress] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesValue, setImagesValue] = useState(data.data.slika);
  const [success, setSuccess] = useState(false);


  //VALUE FROM INPUT
  const [vrstaUsluge, setVrstaUsluge] = useState(data.data.vrstaUsluge);
  const [tipNekretnine, setTipNekretnine] = useState(data.data.tipNekretnine);
  const [naslov, setNaslov] = useState(data.data.naslov);
  const [opis, setOpis] = useState(data.data.opis);
  const [drzava, setDrzava] = useState(data.data.drzava);
  const [grad, setGrad] = useState(data.data.grad);
  const [opstina, setOpstina] = useState(data.data.opstina);
  const [ulica, setUlica] = useState(data.data.ulica);
  const [broj, setBroj] = useState(data.data.broj);
  const [uknjizenost, setUknjizenost] = useState(data.data.uknjizenost);
  const [stanje, setStanje] = useState(data.data.stanje);
  const [povrsina, setPovrsina] = useState(data.data.povrsina);
  const [brojSoba, setBrojSoba] = useState(data.data.brojSoba);
  const [grejanje, setGrejanje] = useState(data.data.grejanje);
  const [sprat, setSprat] = useState(data.data.sprat);
  const [brojUkupnoSpratova, setBrojUkupnoSpratova] = useState(data.data.brojUkupnoSpratova);
  const [opremljenost, setOpremljenost] = useState(data.data.opremljenost);
  const [cena, setCena] = useState(data.data.cena);


  const handleChange = (e) => {
    var imageNames="";
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
      imageNames=imageNames+newImage.name +";"
    }
    setImagesValue(imageNames);
  };

  const deleteStorage = () =>{
    const storage = getStorage();
    const storageRef = ref(storage, `images/${nextId}`);
    listAll(storageRef).then(function (result) {
        result.items.forEach(function (file) {
            const desertRef = ref(storage, `images/${nextId}/${file.name}`);
            deleteObject(desertRef).then(() => {
                console.log("Uspesno")
              }).catch((error) => {
               console.error(error);
              });
           
        });
    }).catch(function (error) {
        console.error(error);
    });

  }

  const addProduct = () =>{
    var data = {
        id:id,
        vrstaUsluge:vrstaUsluge,
        tipNekretnine:tipNekretnine,
        naslov:naslov,
        opis:opis,
        drzava:drzava,
        grad:grad,
        opstina:opstina,
        ulica:ulica,
        broj:broj,
        uknjizenost:uknjizenost,
        stanje:stanje,
        povrsina:povrsina,
        brojSoba:brojSoba,
        grejanje:grejanje,
        sprat:sprat,
        brojSpratova:brojUkupnoSpratova,
        opremljenost:opremljenost,
        cena:cena,
        slika:imagesValue
    }
    axios.post("http://localhost:3001/realEstate/edit", data).then((response) => {
        if(response.status == 200){
          setSuccess(true)
        }
    })
}

  const handleUpload = () => {
    const promises = [];
    deleteStorage();
    promises.push(deleteStorage);
    
    images.map((image) => {
        const imageRef = ref(storage,`images/${nextId}/${image.name}`);
        const imageRefNew = ref(storage,`images/${nextId}/${image.name}`);
        const uploadTask = uploadBytesResumable(imageRefNew, image);
        promises.push(uploadTask);
        uploadTask.on("state_changed",(snapshot) => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
        },
        (error) => {
          console.log(error);
        }
      );
    });
    addProduct()
    promises.push(addProduct);

    Promise.all(promises)
      .then(() =>setSuccess(true) )
      .catch((err) => console.log(err));
  };




  useEffect(() => {
    var nextId;
    if(nextId == undefined){
        axios.get("http://localhost:3001/realEstate/nextId").then((response) => {
            if(response.status == 200){
              nextId=response.data['AUTO_INCREMENT'];
            }
            setNextId(nextId);
        });
    }
    
  });

  return (
    <div>
          {success && <MessageBox text="Uspesno ste izmenili nekretninu" refresh={true}></MessageBox>}
          <div className="formContainer">
                    <div className="content-form">
                    <div id="basicInf">
                        <h5>Osnovne informacije</h5>
                        {/* VRSTA USLUGE */}
                        <label>Vrsta usluge *</label>
                        <select name="vrstaUsluge" id="vrstaUsluge" defaultValue ={data.data.vrstaUsluge} onChange={(event) => {setVrstaUsluge(event.target.value);}}>
                            <option value="Prodaja">Prodaja</option>
                            <option value="Izdavanje">Izdavanje</option>
                        </select>
                        {/* TIP NEKRETNINE */}
                        <label>Tip nekretnine *</label>
                        <select name="tipNekretnine" id="tipNekretnine" select={data.data.tipNekretnine} defaultValue={data.data.tipNekretnine} onChange={(event) => {setTipNekretnine(event.target.value);}}>
                            <option value="Stan">Stan</option>
                            <option value="Kuca">Kuca</option>
                            <option value="Poslovni prostor">Poslovni prostor</option>
                            <option value="Plac">Plac</option>
                            <option value="Garaza">Garaza</option>
                        </select>
                        {/* NASLOV */}
                        <label>Naslov *</label>
                        <input type="text" id="naslov" name='naslov' placeholder='Unesite naslov...' defaultValue={data.data.naslov} onChange={(event) => {setNaslov(event.target.value);}} ></input>
                        {/* OPIS */}
                        <label>Opis</label>
                        <textarea name='opis' id='opis' placeholder='Unesite opis proizvoda' defaultValue={data.data.opis} onChange={(event) => {setOpis(event.target.value);}}></textarea>
                        {/* DRZAVA */}
                        <label>Drzava *</label>
                        <input type="text" id="drzava" name='drzava' placeholder='Unesite drzavu...' defaultValue={data.data.drzava} onChange={(event) => {setDrzava(event.target.value);}}></input>
                        {/* GRAD */}
                        <label>Grad *</label>
                        <input type="text" id="grad" name='grad' placeholder='Unesite grad...' defaultValue={data.data.grad} onChange={(event) => {setGrad(event.target.value);}}></input>
                        {/* OPSTINA */}
                        <label>Opstina *</label>
                        <input type="text" id="opstina" name='opstina' placeholder='Unesite opstinu...' defaultValue={data.data.opstina} onChange={(event) => {setOpstina(event.target.value);}}></input>
                        {/* ULICA */}
                        <label>Ulica</label>
                        <input type="text" id="ulica" name='ulica' placeholder='Unesite ulicu...' defaultValue={data.data.ulica} onChange={(event) => {setUlica(event.target.value);}}></input>
                        {/* BROJ */}
                        <label>Broj</label>
                        <input type="text" id="broj" name='broj' placeholder='Unesite broj...' defaultValue={data.data.broj} onChange={(event) => {setBroj(event.target.value);}}></input>
                        {/* UKNJIZENOST */}
                        <label>Uknjizenost</label>
                        <select name="uknjizenost" id="uknjizenost" defaultValue={data.data.uknjizenost} onChange={(event) => {setUknjizenost(event.target.value);}}>
                            <option value="Uknjizeno">Uknjizeno</option>
                            <option value="Nije uknjizeno">Nije uknjizeno</option>
                            <option value="U procesu uknjizenja">U procesu uknjizenja</option>
                            <option value="Delimicno uknjizeno">Delimicno uknjizeno</option>
                        </select>
                        {/* STANJE */}
                        <label>Stanje</label>
                        <select name="stanje" id="stanje" defaultValue={data.data.stanje} onChange={(event) => {setStanje(event.target.value);}}>
                            <option value="Uobicajno">Uobicajno</option>
                            <option value="Novo">Novo</option>
                            <option value="U izgradnji">U izgradnji</option>
                            <option value="Renovirano">Renovirano</option>
                            <option value="Potrebno renoviranje">Potrebno renoviranje</option>
                            <option value="Dobro stanje">Dobro stanje</option>
                            <option value="Staro">Staro</option>
                            <option value="Odrzavano">Odrzavano</option>
                            <option value="Luksuzno">Luksuzno</option>
                        </select>
                        {/* POVRSINA */}
                        <label>Povrsina</label>
                        <input type="text" id="povrsina" name='povrsina' placeholder='Unesite povrsinu...' defaultValue={data.data.povrsina} onChange={(event) => {setPovrsina(event.target.value);}}></input>
                    </div>
                    <div id="moreInf">
                        <h5>Dodatne informacije</h5>
                        {/* BROJ SOBA */}
                        <label>Broj soba</label>
                        <input type="text" id="brojSoba" name='brojSoba' placeholder='Unesite broj soba...' defaultValue={data.data.brojSoba} onChange={(event) => {setBrojSoba(event.target.value);}}></input>
                        {/* GREJANJE */}
                        <label>Grejanje</label>
                        <select name='grejanje' id='grejanje' defaultValue={data.data.grejanje} onChange={(event) => {setGrejanje(event.target.value);}}>
                            <option value="Nema grejanja">Nema grejanja</option>
                            <option value="Centralno">Centralno</option>
                            <option value="Erazno">Etazno</option>
                            <option value="Struja">Struja</option>
                            <option value="Gas">Gas</option>
                            <option value="Kaljeva pec">Kaljeva pec</option>
                            <option value="Ta pex">Ta pec</option>
                            <option value="Norveski radijatori">Norveski radijatori</option>
                            <option value="Podno">Podno</option>
                            <option value="Cvrsto gorivo">Cvrsto gorivo</option>
                            <option value="Alokatori">Alokatori</option>
                            <option value="Toplotna pumpa">Toplotna pumpa</option>
                            <option value="Klima">Klima</option>
                            <option value="Merni radijator">Mermerni radijator</option>
                        </select>
                        {/* SPRAT */}
                        <label>Sprat</label>
                        <input type="text" id="sprat" name='sprat' placeholder='Unesite sprat...' defaultValue={data.data.sprat} onChange={(event) => {setSprat(event.target.value);}}></input>
                        {/* BROJ SPRATOVA */}
                        <label>Broj ukupno spratova u zgradi</label>
                        <input type="text" id="brojSpratova" name='brojSpratova'  placeholder='Unesite ukupan broj spratova...' defaultValue={data.data.brojSpratova} onChange={(event) => {setBrojUkupnoSpratova(event.target.value);}}></input>
                        {/* OPREMLJENOST */}
                        <label>Opremljenost</label>
                        <select name='opremljenost' id='opremljenost' defaultValue={data.data.opremljenost} onChange={(event) => {setOpremljenost(event.target.value);}}>
                            <option value="prazan">Prazan</option>
                            <option value="polunamesten">Polunamesten</option>
                            <option value="namesten">Namesten</option>
                        </select>
                        {/* DODAVANJE FOTOGRAFIJA */}
                        <label>Dodaj fotografije</label>
                        <progress value={progress} max="100" />
                        <input type="hidden" id="imageNames" defaultValue={imagesValue}></input>
                        <input type="file" multiple onChange={handleChange}/>
                        {/* CENA */}
                        <label>Cena</label>
                        <input type="text" id="cena" name='cena' placeholder='Unesite cenu nekretnine...' defaultValue={data.data.cena} onChange={(event) => {setCena(event.target.value);}}></input>
                    </div>
                </div>
                <div className="button-section">
                    <button onClick={handleUpload}>Azuriraj proizvod</button>
                </div>
        </div>
    </div>
  )
}
