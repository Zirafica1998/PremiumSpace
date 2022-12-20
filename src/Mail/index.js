import React, {useState} from 'react'
import axios from 'axios';
import MessageBox from '../MessageBox';
import { useTranslation } from "react-i18next";


function MailForm() {
    const [text,setText] = useState("");
    const [email,setEmail] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [success, setSuccess] = useState(false);
    const { t } = useTranslation();

    const sendMail = () =>{
        if(email !="" && text !="" && phoneNumber != ""){
            var data = {
                text:text,
                email:email,
                firstName:firstName,
                lastName:lastName,
                phone:phoneNumber
            }
            axios.post("http://localhost:3001/mail/sendMail", data).then((response) => {
                if(response.status == 200){
                  setSuccess(true);
                }
            })
        }else{
            alert("Morate popuniti sva obavezna polja");
        }
        
    }
  return (
    <div>
    {success ?? <MessageBox text="Uspesno ste poslali upit" refresh={false}></MessageBox>}
        <div className="mail-form container">
            <div className="content-form">
            <div className='row'>
                <div className='col-md-6'>
                 {/* IME */}
                    <label>{t("label-fname")}</label>
                    <input type="text" id="name" name='name' placeholder={t("fname-placeholder")} onChange={(event) => {setFirstName(event.target.value);}} ></input>
                </div>
                <div className='col-md-6'>
                {/* PREZIME */}
                    <label>{t("label-lname")} </label>
                    <input type="text" id="email"  name='email' placeholder={t("lname-placeholder")} onChange={(event) => {setLastName(event.target.value);}} ></input>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                {/* TELEFON */}
                    <label>{t("label-phone")}*</label>
                    <input type="text" id="email" required name='email' placeholder={t("phone-placeholder")} onChange={(event) => {setPhoneNumber(event.target.value);}} ></input>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                {/* I-mejl */}
                    <label>{t("label-email")}</label>
                    <input type="email" id="email" required name='email' placeholder={t("email-placeholder")} onChange={(event) => {setEmail(event.target.value);}} ></input>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                {/* OPIS */}
                    <label>{t("label-text")}</label>
                    <textarea name='text' id='text' required placeholder={t("text-placeholder")} onChange={(event) => {setText(event.target.value);}}></textarea>
                </div>
            </div>
        </div>
        <div className="button-section">
            <button onClick={sendMail}>{t("send-request-button")}</button>
        </div>
    </div>
    </div>
  )
}

export default MailForm
