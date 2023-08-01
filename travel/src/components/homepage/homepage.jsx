import React from 'react';
import Slider from "react-slick";
import corousel1 from "../../images/corousel1.jpg";
import corousel2 from "../../images/corousel1.jpg";
import corousel3 from "../../images/corousel1.jpg";
import corousel4 from "../../images/corousel1.jpg";
import corousel5 from "../../images/corousel1.jpg";

function Homepage() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <Slider {...settings}>
    <div>
      <img src={corousel1} alt="" />
    </div>
    <div>
    <img src={corousel2} alt="" />
    </div>
    <div>
    <img src={corousel3} alt="" />
    </div>
    <div>
    <img src={corousel4} alt="" />
    </div>
    <div>
    <img src={corousel5} alt="" />
    </div>
  
  </Slider>
  );
}

export default Homepage;

