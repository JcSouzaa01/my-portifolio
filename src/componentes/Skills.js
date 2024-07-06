import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './skills.css';

function SampleNextArrow(props) {
    const { className, style, } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"}}
      />
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"}}
      />
    );
}

function Responsive(props) {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      adaptiveHeight: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              infinite: true,
              dots: true
            }
        },
      ]
    };
    return (
        <main className='flex mx-auto max-w-5xl px-2 justify-center items-center mt-[70px]'>
            <div className="slider-container w-[250px] md:w-[600px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.70)]">
                <Slider {...settings} className=''>
                    {props.children}
                </Slider>
            </div>
        </main>
    );
  }
  
  export default Responsive;
