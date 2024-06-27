import React from 'react';
import Header from './Header';

const App = () => {
  return (
    <div>
      <header className='flex items-center justify-center'>
        <Header />
      </header>
      <main>
        <section id="section0" style={{ height: '100vh', paddingTop: '70px' }}>TEST</section>
        <section id="section1" style={{paddingTop: '30px' }} className='flex items-center justify-center'>
          <h2 className='flex text-white text-[28px] items-center gap-1' style={{fontFamily: 'archivo black'}}>
            <div className='w-[12px] h-[12px] bg-[#51BBD2] items-center justify-center flex'>
              <div className='w-[6px] h-[6px] bg-[#07161B]'>
              </div>
            </div> 
            SOBRE
          </h2>
        </section>
        <div style={{ height: '100vh'}}>teste</div>
        <section id="section2" style={{paddingTop: '30px' }} className='flex items-center justify-center'>
          <h2 className='flex text-white text-[28px] items-center gap-1' style={{fontFamily: 'archivo black'}}>
            <div className='w-[12px] h-[12px] bg-[#51BBD2] items-center justify-center flex'>
              <div className='w-[6px] h-[6px] bg-[#07161B]'></div>
            </div> 
            Skills
          </h2>
        </section>
        <div style={{ height: '100vh'}}>teste</div>
        <section id="section3" style={{paddingTop: '30px' }} className='flex items-center justify-center'>
          <h2 className='flex text-white text-[28px] items-center gap-1' style={{fontFamily: 'archivo black'}}>
            <div className='w-[12px] h-[12px] bg-[#51BBD2] items-center justify-center flex'>
              <div className='w-[6px] h-[6px] bg-[#07161B]'></div>
            </div> 
            Projetos
          </h2>
        </section>
        <div style={{ height: '100vh'}}>teste</div>
        <section id="section4" style={{paddingTop: '30px' }} className='flex items-center justify-center'>
          <h2 className='flex text-white text-[28px] items-center gap-1' style={{fontFamily: 'archivo black'}}>
            <div className='w-[12px] h-[12px] bg-[#51BBD2] items-center justify-center flex'>
              <div className='w-[6px] h-[6px] bg-[#07161B]'></div>
            </div> 
            Contrato
          </h2>
        </section>
        <div style={{ height: '100vh'}}>teste</div>
      </main>
    </div>
  );
};

export default App;