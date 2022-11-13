import React, { useEffect ,useState} from 'react';
import Axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function NewPost() {
 const [data, setData] = useState([])
 const [isLoading, setIsLoading] = useState(false);
  useEffect(()=>{
    Axios.get('http://localhost:3001/get/newPost').then((data)=>{
        if((data.data).length>0){
            // console.log(data.data);
            // data=data.data;
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
                <div className='title'><h2>Najnovije nekretnine</h2></div>
                    <Slider {...settings}>
                    {isLoading && (data).map(val => (
                        <div className="realEstate col-lg-4 col-md-4 col-sm-6" key={val.id}>
                            <a href='#' ket={val.id}>
                                <div className="up-section">
                                    <div className="img">
                                        <img src={((val.slika).toString().split(';'))[0]} alt="image" />
                                    </div>
                                    <div className="price">
                                        <span>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.cena)}</span>
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
                                    {/* <span>{val.opis}</span> */}
                                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
