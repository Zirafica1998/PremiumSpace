import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="/slider/1.jpg" alt="image" />
          </div>
          <div>
            <img src="/slider/2.jpg" alt="image" />
          </div>
          <div>
          <img src="/slider/3.jpg" alt="image" />
          </div>
          <div>
          <img src="/slider/4.jpg" alt="image" />
          </div>
        </Slider>
      </div>
    );
  }
}
