import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <main className='flex mx-auto max-w-6xl px-2 pt-16 md:pt-[125px] flex-col xl:flex-row gap-[100px] justify-center items-center xl:items-start' style={{ fontFamily: 'archivo'}}>
            
            <motion.span 
                className='text-[#CEC7BF] xl:pt-[50px] text-center md:text-xl'
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 50 }}
            >
                Bem-vindo ao meu mundo de código e criatividade, aqui você conhecera um pouco <Link
                      to="section1"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      style={{ cursor: 'pointer' }} className='text-[#00E0c3] duration-200'
                  >
                      SOBRE
                  </Link> mim, minhas <Link
                      to="section2"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      style={{ cursor: 'pointer' }} className='text-[#00E0c3] duration-200'
                  >
                      SKILLS
                  </Link>, meus <Link
                      to="section3"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      style={{ cursor: 'pointer' }} className='text-[#00E0c3] duration-200'
                  >
                      PROJETOS
                  </Link> e por fim terá meus <Link
                      to="section4"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      style={{ cursor: 'pointer' }} className='text-[#00E0c3] duration-200'
                  >
                      CONTATOS
                  </Link> por onde podemos se comunicar. 
            </motion.span>
            
            <motion.img 
                src='/img/home/img1.png' 
                alt='Imagem Ilustrativa' 
                title='Imagem Ilustrativa' 
                className='size-[350px] md:size-[500px]'
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 50 }}
            />
        </main>
    )
}

export default Home;
