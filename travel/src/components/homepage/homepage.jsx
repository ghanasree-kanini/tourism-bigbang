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
    autoplay: true, // Add this line to enable automatic sliding
    autoplaySpeed: 3000, // Set the duration (in milliseconds) between slides
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
    <div>
      <Slider {...settings}>
        <div>
          <img className="img-fluid" src={corousel1} style={{ width: 450, height: 600 }} alt="" />
        </div>
        <div>
          <img className="img-fluid" src={corousel2} style={{ width: 450, height: 600 }} alt="" />
        </div>
        <div>
          <img className="img-fluid" src={corousel3} style={{ width: 450, height: 600 }} alt="" />
        </div>
        <div>
          <img className="img-fluid" src={corousel4} style={{ width: 450, height: 600 }} alt="" />
        </div>
        <div>
          <img className="img-fluid" src={corousel5} style={{ width: 450, height: 600 }} alt="" />
        </div>
        <div>
          <img className="img-fluid" src={corousel6} style={{ width: 450, height: 600 }} alt="" />
        </div>
        <div>
          <img className="img-fluid" src={corousel7} style={{ width: 450, height: 600 }} alt="" />
        </div>

      </Slider>

      <div className="carousel-text">
        <p>DISCOVER YOUR</p>
        <p>NEXT AMAZING TRAVEL EXPERIENCE</p>
        <button className="surf-button">Surf More!</button>
      </div>

      <br></br>
      
      <div className="card">
      <div className="adventure-text">
        <p>ADVENTURE IS OUT HERE!</p>
      </div>
      <button className="dare-button">Dare!</button>
    </div>

    </div>



  );
}

export default Homepage;

