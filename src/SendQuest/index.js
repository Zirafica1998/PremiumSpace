import React, { useEffect, useState } from "react"

export default function SendQuest(){
  
    return (
        <div className="sendQuest">
            <img src="./sellBanner.jpeg" alt="Sell banner"></img>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 offset-md-6">
                        <div className="container-quest">
                            <h5>Oglasite vasu nekretninu</h5>
                            <span>Ukoliko prodajete stan, kuću, lokal, poslovni prostor ili zemljište oglasite ga preko naše agencije. Da bi ostvarili što bržu prodaju na tržištu nekretnina potrebna je adekvatna profesionalna procena tržišne vrednosti Vaše nekretnine.<br></br>
                            Sama procena nekretnine uključuje niz faktora koji utiču na njenu vrednosti, a u otkrivanju tih faktora na raspolaganju Vam stoji naš stručni tim sa dugogodišnjim iskustvom.</span>
                            <button className="button-prime">Posalji upit</button>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}
