import React, { useEffect ,useState} from 'react';
import Axios from 'axios'
import {useNavigate} from "react-router-dom"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";


export default function NewPost() {
 const [data, setData] = useState([])
 const [isLoading, setIsLoading] = useState(false);
 let history = useNavigate();
 const { t } = useTranslation();

  useEffect(()=>{
    Axios.get('http://localhost:3001/realEstate/last6').then((data)=>{
        if((data.data).length>0){
            setData(data.data);
            setIsLoading(true);
        }
        
    })
  },[])

  const settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
  };

  return (
    <div className="container result newPost">
        <div className="result-search">
            <div className="search-container row">
                <div className='title'><h2>{t("latest-real-estate")}</h2></div>
                    <Slider {...settings}>
                    {isLoading && (data).map(val => (
                        <div className="realEstate col-lg-4 col-md-4 col-sm-6" key={val.id} onClick = {() => {history('/products/'+val.id)}}>
                            <a href='#' ket={val.id}>
                                <div className="up-section">
                                    <div className="img">
                                        {val.slika == null ? (
                                            <img src='no-image.png' alt='No image'></img>
                                        ):(
                                            <img src={"https://firebasestorage.googleapis.com/v0/b/premiumspace-dfd7a.appspot.com/o/images%2F"+(val.id)+"%2F"+((val.slika).toString().split(';'))[0]+"?alt=media"} alt="image" />
                                        )}
                                    </div>
                                    <div className="price">
                                        <span>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.cena)}</span>
                                    </div>
                                    <div className="type">
                                        <span>{t(val.vrstaUsluge)}</span>
                                    </div>
                                </div>
                                <div className="center-section">
                                    <div className="title">
                                        <span>{val.naslov}</span>
                                    </div>
                                    <div className="location">
                                        <span>{val.opstina}</span>
                                    </div>
                                    <div className="desc">
                                    <span>{val.opis}</span>
                                    </div>
                                </div>
                                <div className="bottom-section">
                                    <div className="number-room">
                                        <img src="room-icon.png" alt="room-icon"></img>
                                        <span>{val.brojSoba}</span>
                                    </div>
                                    <div className="size">
                                        <img src="size-icon.png" alt="size-icon"></img>
                                        <span>{val.povrsina} m²</span>
                                    </div>
                                </div>
                            </a>
                    </div>
                   
                    ))}
                     </Slider>
                </div>
        </div>
    </div>
  );
};
