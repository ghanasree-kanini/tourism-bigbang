import React from 'react';
import Slider from "react-slick";
import "../../components/homepage/homepage.css";
import corousel1 from "../../images/corousel1.jpg";
import corousel2 from "../../images/corousel2.jpg";
import corousel3 from "../../images/corousel3.jpg";
import corousel4 from "../../images/corousel4.jpg";
import corousel5 from "../../images/corousel5.jpg";
import corousel6 from "../../images/corousel6.jpg";
import corousel7 from "../../images/corousel7.jpg";


function Homepage() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <Slider {...settings}>
    <div className="silde">
      <img className="img-fluid" src={corousel1}  style={{width:450,height:400}} alt="" />
    </div>
    <div>
    <img className="img-fluid" src={corousel2} style={{width:450,height:400}} alt="" />
    </div>
    <div>
    <img className="img-fluid" src={corousel3} style={{width:450,height:400}} alt="" />
    </div>
    <div>
    <img className="img-fluid" src={corousel4} style={{width:450,height:400}} alt="" />
    </div>
    <div>
    <img  className="img-fluid" src={corousel5} style={{width:450,height:400}} alt="" />
    </div>
    <div>
    <img  className="img-fluid" src={corousel6} style={{width:450,height:400}} alt="" />
    </div>
    <div>
    <img  className="img-fluid" src={corousel7} style={{width:450,height:400}} alt="" />
    </div>
  
  </Slider>
  );
}

export default Homepage;

