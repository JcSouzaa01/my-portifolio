import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './projetos.css';

function SampleNextArrow(props) {
  const { className, style } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
    />
  );
}

const Card = ({ imageSrc, title, description, href }) => (
    <div className='flex justify-start items-center flex-col hover:shadow-lg transition-shadow duration-300'>
        <div className='h-[10px] w-[250px] bg-[#00E0c3] rounded-t-[50px]'></div>
        <div className="bg-[#3D737F] p-6 rounded-lg shadow-md h-[400px] mx-auto justify-center items-center flex flex-col">
            <div className="overflow-hidden flex justify-center items-center rounded-md">
                <a href={href}>
                    <img src={imageSrc} alt={title} className="rounded-md" />
                </a>
            </div>
            <div className="text-center mt-4 flex justify-center items-center flex-col">
                <h2 className="text-xl font-semibold text-white" style={{ fontFamily: 'archivo black' }}>{title}</h2>
                <p className="mt-2 text-[#CEC7BF]" style={{ fontFamily: 'archivo' }}>{description}</p>
                <a href={href} className='text-[#00E0c3]' style={{ fontFamily: 'archivo' }}>Visite o site!</a>
            </div>
        </div>
    </div>
);

const ProjetosCard = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-2 w-[300px] md:w-[600px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.70)]">
      <Slider {...settings}>
        <Card 
          imageSrc="./img/Projetos/cardapio1.png" 
          title="Website - Cardápio Online"
          description="Site para facilitar a escolha e compra dos clientes de uma hamburgueria."
          href="https://letsgocardapio.vercel.app/"
        />
        <Card 
          imageSrc="./img/Projetos/langboss1.png" 
          title="Website - LangBoss"
          description="Site dedicado a facilitar os estudos de outras línguas, oferecendo traduções para aprimorar seu aprendizado."
          href="https://langboss.vercel.app/" 
        />
      </Slider>
    </div>
  );
};

export default ProjetosCard;
