import React from 'react';
import Header from './Header';
import Home from './Home';
import Sobre from './Sobre';
import Skills from './Skills';
import SkillsList from './Skills-Lists';
import Projetos from './Projetos';
import Contatos from './Contatos';
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <header className='flex items-center justify-center'>
        <Header />
      </header>
      <main>
        <section id="section0" style={{ height: '100vh', paddingTop: '100px' }}><Home/></section>

        <section id="section1" style={{paddingTop: '70px' }} className='flex items-center justify-center flex-col'>
          <h2 
          className='flex text-white text-[28px] items-center gap-1' 
          style={{fontFamily: 'archivo black'}}>
            <div className='w-[12px] h-[12px] bg-[#00E0c3] items-center justify-center flex'>
              <div className='w-[6px] h-[6px] bg-[#07161B]'></div>
            </div> 
            SOBRE
          </h2>
          <Sobre/>
        </section>

        <section id="section2" style={{paddingTop: '70px' }} className='flex items-center justify-center flex-col mb-[15px]'>
          <h2 className='flex text-white text-[28px] items-center gap-1' style={{fontFamily: 'archivo black'}}>
            <div className='w-[12px] h-[12px] bg-[#00E0c3] items-center justify-center flex'>
              <div className='w-[6px] h-[6px] bg-[#07161B]'></div>
            </div> 
            Skills
          </h2>
          <Skills> 
            <SkillsList nome="HTML" imgUrl="/img/Skills/html.png" alt="logo html" title="HTML" />
            <SkillsList nome="CSS" imgUrl="/img/Skills/CSS.png" alt="logo CSS" title="CSS" />
            <SkillsList nome="JS" imgUrl="/img/Skills/JS.png" alt="logo JS" title="JavaScript" />
            <SkillsList nome="Tailwind" imgUrl="/img/Skills/tailwind.png" alt="logo Tailwind" title="TailwindCSS" />
          </Skills>
        </section>
        
        <section id="section3" style={{paddingTop: '70px' }} className='flex items-center justify-center flex-col'>
          <h2 className='flex text-white text-[28px] items-center gap-1' style={{fontFamily: 'archivo black'}}>
            <div className='w-[12px] h-[12px] bg-[#00E0c3] items-center justify-center flex'>
              <div className='w-[6px] h-[6px] bg-[#07161B]'></div>
            </div> 
            Projetos
          </h2>
          <div className='mt-[70px]'><Projetos/></div>
        </section>
        
        <section id="section4" style={{paddingTop: '70px' }} className='flex items-center justify-center flex-col'>
          <h2 className='flex text-white text-[28px] items-center gap-1' style={{fontFamily: 'archivo black'}}>
            <div className='w-[12px] h-[12px] bg-[#00E0c3] items-center justify-center flex'>
              <div className='w-[6px] h-[6px] bg-[#07161B]'></div>
            </div> 
            Contatos
          </h2>
          <div><Contatos/></div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default App;