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
            await Axios.get('http://localhost:3001/realEstate/byData/' + params.id).then((response) =>{
              response = response.data;
              var imageArray=[];
              var image=response.slika;
              imageArray=image.split(";");
              setImage(imageArray);
              setData(response);
              setLinkAddress("https://www.google.com/maps/embed/v1/place?key=AIzaSyBDsxzY2Lp_gp_9NwEWRa79mAgLxfSa5gQ&region=SR&language=sr&q="+ response.drzava +","+response.grad + "," +response.opstina +',' + response.ulica + " " + response.broj);
            })
            
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
            <div key={data.id}>
                <div className="row">
                    <div className="col-md-12 title">
                        <h2>{data.naslov}</h2>
                    </div>
                </div>
                <div className="image-carousel row">
                    <div className="col-md-7">
                        <Slider {...settings}>
                            {image.map(val =>(
                                <div key={0}>
                                    <img src={"https://firebasestorage.googleapis.com/v0/b/premiumspace-dfd7a.appspot.com/o/images%2F"+(params.id)+"%2F"+(val)+"?alt=media"} alt="image" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
              <div className="section-wrap">
                <div className="row location">
                    <div className="col-md-3 col-sm-12">
                        <span>{data.drzava},{data.grad}</span>
                    </div>
                </div>
                <div className="row priceAndSize">
                  <div className="col-md-3 col-sm-12">
                  <span className="price">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(data.cena)}</span>
                  <span className="priceWithSize">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(data.cena)/parseInt(data.povrsina))}/m²</span>
                  </div>
                </div>
                <div className="row details">
                  <span className="title">Detalji</span>
                  <div className="section section-1">
                    <span className="subtitle">Podaci o nekretnini</span>
                    <ul>
                      <li>Vrsta usluge: <strong>{data.vrstaUsluge}</strong></li>
                      <li>Kvadratura:<strong> {data.povrsina} m²</strong></li>
                      <li>Stanje nekretnine: <strong>{data.stanje}</strong></li>
                      <li>Broj soba:<strong>{data.brojSoba}</strong> </li>
                      <li>Sprat: <strong>{data.sprat}</strong></li>
                      <li>Opremljenost: <strong>{data.opremljenost}</strong></li>
                      <li>Ukupan broj spratova: <strong>{data.brojSpratova}</strong></li>
                      <li>Grejanje: <strong>{data.grejanje}</strong></li>

                    </ul>
                  </div>
                </div>
                <div className="row text-desc">
                  <span className="title">Opis</span>
                  <div className="section-1">
                    <span>Opstina {data.opstina}</span>
                    <span>{data.ulica} {data.broj}</span>
                    <p>{data.opis}</p>
                  </div>
                </div>
                <div className="row location-map">
                  <span className="title">Lokacija</span>
                  <div className="section-1">
                    <span><b>{data.drzava} - {data.grad} - {data.opstina} - {data.ulica} {data.broj}</b></span>
                  </div>
                  <div className="section-2">
                  <iframe id="addressIframe" _ngcontent-serverapp-c116="" height="150" loading="lazy" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade" class="border-0" src={linkAddress}></iframe>
                  </div>
                </div>
              </div>
            </div>
      </div>
    )}
    </div>
  )
}
