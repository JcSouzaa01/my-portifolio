import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const logo1 = "<"
  const logo2 = "/>"
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(217, 217, 217, 0.4)' : 'transparent',
        transition: 'background-color 0.5s ease',
      }} className=' top-4 rounded-full lg:w-[70%] w-full md:px-10 py-[10px] backdrop-blur md:text-xl'
    >
      
      <nav className=' flex justify-between ' >
      <Link
        activeClass="active"
        to="section0"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        style={{cursor: 'pointer' }}
      >
        <div style={{
            fontFamily: 'audiowide',
          }} className= 'md:hover:scale-110 duration-200 pl-[10px] md:pl-0 '>
          <span className=' text-[#51BBD2] pr-1' >
            {logo1}
          </span>
          <span className=' text-white font-audiowide '>
            Charles Souza
          </span>
          <span className=' text-[#51BBD2] font-audiowide pl-1'>
            {logo2}
          </span>
        </div>
        </Link>
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, fontFamily: 'archivo'}} className='xl:w-[70%] xl:justify-evenly items-center justify-end gap-0 sm:gap-8 md:gap-[40px] lg:gap-[20px]' >
          <li style={{ margin: '0 10px' }} className= 'hover:scale-110 duration-200'>
            <Link
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ cursor: 'pointer' }} className=' text-[#CEC7BF] hover:text-white  duration-200'
            >
              Sobre
            </Link>
          </li>
          <li style={{ margin: '0 10px' }} className= 'hover:scale-110 duration-200'>
            <Link
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ cursor: 'pointer' }} className=' text-[#CEC7BF] hover:text-white'
            >
              Skills
            </Link>
          </li>
          <li style={{ margin: '0 10px' }} className= 'hover:scale-110 duration-200'>
            <Link
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ cursor: 'pointer' }} className=' text-[#CEC7BF] hover:text-white'
            >
              Projetos
            </Link>
          </li>
          <li style={{ margin: '0 10px' }} className= 'hover:scale-110 duration-200'>
            <Link
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ cursor: 'pointer' }} className=' text-[#CEC7BF] hover:text-white'
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;