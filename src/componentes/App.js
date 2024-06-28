import React from 'react';
import Header from './Header';
import Home from './Home';

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
              <div className='w-[6px] h-[6px] bg-[#07161B]'>
              </div>
            </div> 
            SOBRE
          </h2>
          <div style={{ height: '100vh'}}>Test</div>
        </section>

        <section id="section2" style={{paddingTop: '70px' }} className='flex items-center justify-center flex-col'>
          <h2 className='flex text-white text-[28px] items-center gap-1' style={{fontFamily: 'archivo black'}}>
            <div className='w-[12px] h-[12px] bg-[#00E0c3] items-center justify-center flex'>
              <div className='w-[6px] h-[6px] bg-[#07161B]'></div>
            </div> 
            Skills
          </h2>
          <div style={{ height: '100vh'}}>teste</div>
        </section>
        
        <section id="section3" style={{paddingTop: '70px' }} className='flex items-center justify-center flex-col'>
          <h2 className='flex text-white text-[28px] items-center gap-1' style={{fontFamily: 'archivo black'}}>
            <div className='w-[12px] h-[12px] bg-[#00E0c3] items-center justify-center flex'>
              <div className='w-[6px] h-[6px] bg-[#07161B]'></div>
            </div> 
            Projetos
          </h2>
          <div style={{ height: '100vh'}}>teste</div>
        </section>
        
        <section id="section4" style={{paddingTop: '70px' }} className='flex items-center justify-center flex-col'>
          <h2 className='flex text-white text-[28px] items-center gap-1' style={{fontFamily: 'archivo black'}}>
            <div className='w-[12px] h-[12px] bg-[#00E0c3] items-center justify-center flex'>
              <div className='w-[6px] h-[6px] bg-[#07161B]'></div>
            </div> 
            Contrato
          </h2>
          <div style={{ height: '100vh'}}>teste</div>
        </section>
      </main>
    </div>
  );
};

export default App;