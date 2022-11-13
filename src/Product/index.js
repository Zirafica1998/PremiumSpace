import React, { useEffect, useState } from "react"
import {Route, Link, Routes, useParams} from 'react-router-dom';
import Axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Product() {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const [image,setImage] = useState([])
    const [linkAddress, setLinkAddress] = useState([]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
      };

    useEffect(() => {
        const fetchData = async () =>{
          setLoading(true);
          try {
            const {data: response} = await  Axios.get('http://localhost:3001/product/get/' + params.id);
            var imageArray=[];
            var image=response[0].slika;
            imageArray=image.split(";");
            setImage(imageArray);
            setData(response);
            setLinkAddress("https://www.google.com/maps/embed/v1/place?key=AIzaSyBDsxzY2Lp_gp_9NwEWRa79mAgLxfSa5gQ&region=SR&language=sr&q="+ response[0].drzava +","+response[0].grad + "," +response[0].opstina +',' + response[0].ulica + " " + response[0].broj);
          } catch (error) {
            console.error(error.message);
          }
          setLoading(false);
        }
        
    
        fetchData();
      }, []);

  return(
    <div>
    {loading && <div>Loading</div>}
    {!loading && (
      <div className="product-detail container">
        {data.map(item => (
            <div key={item.id}>
                <div className="row">
                    <div className="col-md-12 title">
                        <h2>{item.naslov}, {item.ulica}, {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(item.cena)}, {item.povrsina}m²</h2>
                    </div>
                </div>
                <div className="image-carousel row">
                    <div className="col-md-7">
                        <Slider {...settings}>
                            {image.map(val =>(
                                <div key={0}>
                                    <img src={"/product/"+val} alt="image" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
              <div className="section-wrap">
                <div className="row location">
                    <div className="col-md-3 col-sm-12">
                        <span>{item.drzava},{item.grad}</span>
                    </div>
                </div>
                <div className="row priceAndSize">
                  <div className="col-md-3 col-sm-12">
                  <span className="price">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(item.cena)}</span>
                  <span className="priceWithSize">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(item.cena)/parseInt(item.povrsina))}/m²</span>
                  </div>
                </div>
                <div className="row details">
                  <span className="title">Detalji</span>
                  <div className="section section-1">
                    <span className="subtitle">Podaci o nekretnini</span>
                    <ul>
                      <li>Vrsta usluge: <strong>{item.vrstaUsluge}</strong></li>
                      <li>Kvadratura:<strong> {item.povrsina} m²</strong></li>
                      <li>Stanje nekretnine: <strong>{item.stanje}</strong></li>
                      <li>Broj soba:<strong>{item.brojSoba}</strong> </li>
                      <li>Sprat: <strong>{item.sprat}</strong></li>
                      <li>Godina izgradnje:<strong>{item.godinaIzgradnje}</strong> </li>
                      <li>Opremljenost: <strong>{item.opremljenost}</strong></li>
                      <li>Ukupan broj spratova: <strong>{item.brojSpratova}</strong></li>
                    </ul>
                  </div>
                  <div className="section section-2">
                    <span className="subtitle">Dodatna opremljenost</span>
                    <ul>
                      <li>Parking ili Garaza: <strong>{item.parkingIGaraza}</strong></li>
                      <li>Lift:<strong>{item.lift}</strong> </li>
                    </ul>
                  </div>
                  <div className="section section-3">
                    <span className="subtitle">Tehnicka opremljenost</span>
                    <ul>
                      <li>Internet:<strong>{item.internet}</strong> </li>
                      <li>Telefonska linija:<strong>{item.telefonskaLinija}</strong> </li>
                      <li>Kablovska:<strong>{item.kablovska}</strong></li>
                    </ul>
                  </div>
                  <div className="section section-4">
                    <span className="subtitle">Sigurnosna oprema</span>
                    <ul>
                      <li>Video nadzor: <strong>{item.videoNadzor}</strong></li>
                      <li>Alarm: <strong>{item.alarm}</strong></li>
                    </ul>
                  </div>
                  <div className="section section-5">
                    <span className="subtitle">Ostalo</span>
                    <ul>
                      <li>Grejanje: <strong>{item.grejanje}</strong></li>
                      <li>Broj kupatila: <strong>{item.kupatilo}</strong></li>
                      <li>Broj toalet-a: <strong>{item.toalet}</strong></li>
                      <li>Lodja: <strong>{item.lodja}</strong></li>
                      <li>Prilaz za invalide: <strong>{item.prilazZaInavlide}</strong></li>
                      <li>Podrum: <strong>{item.podrum}</strong></li>
                      <li>Tavan: <strong>{item.tavan}</strong></li>
                      <li>Dvorsite: <strong>{item.dvoriste}</strong></li>
                    </ul>
                  </div>
                </div>
                <div className="row text-desc">
                  <span className="title">Opis</span>
                  <div className="section-1">
                    <span>Opstina {item.opstina}</span>
                    <span>{item.ulica} {item.broj}</span>
                    <p>{item.opis}</p>
                  </div>
                </div>
                <div className="row location-map">
                  <span className="title">Lokacija</span>
                  <div className="section-1">
                    <span><b>{item.drzava} - {item.grad} - {item.opstina} - {item.ulica} {item.broj}</b></span>
                  </div>
                  <div className="section-2">
                  <iframe id="addressIframe" _ngcontent-serverapp-c116="" height="150" loading="lazy" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade" class="border-0" src={linkAddress}></iframe>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
    )}
    </div>
  )
}
