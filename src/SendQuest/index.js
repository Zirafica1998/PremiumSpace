import React, { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import { useTranslation } from "react-i18next";

export default function SendQuest(){
    let history = useNavigate();
    const { t } = useTranslation();
    return (
        <div className="sendQuest">
            <img src="./sellBanner.jpeg" alt="Sell banner"></img>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 offset-md-6">
                        <div className="container-quest">
                            <h5>{t("advertise-your-property")}</h5>
                            <span>{t("adv-text-1")}<br></br>{t("adv-text-2")}</span>
                            <a className="button-prime" href="/slanje-upita">{t("send-request-button")}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
