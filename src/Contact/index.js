import { t } from 'i18next'
import React,{useState} from 'react'
import MailForm from '../Mail'

function Contact() {
    const [linkAddress,setLinkAddress] = useState("https://www.google.com/maps/embed/v1/place?key=AIzaSyBDsxzY2Lp_gp_9NwEWRa79mAgLxfSa5gQ&region=SR&language=sr&q=Mirjevski Bulevar 92")
  return (
    <div>
        <div className='container contact'>
            <header><h3>{t("contact")}</h3></header>
            <div className='map'>
                <iframe id="addressIframe" _ngcontent-serverapp-c116="" height="150" loading="lazy" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade" class="border-0" src={linkAddress}></iframe>
            </div>
            <div className='map-detail'>
                <div className='row'>
                    <div className='col-md-6'>
                        <span>Premium space agencija za nekretnine</span>
                        <a href='tel:+381611829110'>+381611829110</a>
                        <a href='mailto:office@premiumspace.rs'>office@premiumspace.rs</a>
                    </div>
                    <div className='col-md-6'>
                        <span>Mirjevski bulevar 92</span>
                        <span>Srbija,Beograd,11000</span>
                    </div>
                </div>
                
            </div>
            <div className='form'>
                <MailForm></MailForm>
            </div>
        </div>
    </div>
  )
}

export default Contact
