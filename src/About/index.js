import React from 'react'
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <div className='container about-me'>
        <header><h3>{t("about_us")}</h3></header>
        <div className='row'>
            <div className='left-side'>
                <p>{t("about-t1")}</p>
                <p>{t("about-t2")}</p>
                <p>{t("about-t3")}</p>
                <p>{t("about-t4")}</p>     
                <p>{t("about-t5")}</p>
            </div>
            <div className='right-side'>
                <img src='aboutMe.jpg' alt='About me image'></img> 
            </div>
        </div>
    </div>
  )
}

export default About
