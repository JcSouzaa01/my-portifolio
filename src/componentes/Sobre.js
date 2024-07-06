import React from 'react';

const Sobre = () => {
  return (
    <main className='flex mx-auto max-w-5xl px-2 justify-center items-center mt-[70px]'>
        <div className=' bg-[#3D737F] flex justify-start items-center flex-col p-7 drop-shadow-[0_10px_10px_rgba(0,0,0,0.70)] rounded-tl-[100px] rounded-br-[100px] rounded-tr-lg rounded-bl-lg md:flex-row md:justify-evenly gap-7 md:gap-0'>
            <div class="flex justify-center items-center flex-col gap-2">
                <img src="/img/sobre/my-foto1.png" alt="Minha foto" title='Charles Souza' className='img1 size-44 border-[3px] border-[#00E0c3] rounded-full'/>
                <h1 style={{ fontFamily: 'archivo'}} className='text-4xl text-white'>Charles Souza</h1>
                <div className='flex gap-2'>
                    <a href="https://www.instagram.com/_jc.s0uza/">
                        <img src="/img/sobre/instagram.png" alt="Instagram" title='Instagram' className='size-8'/>
                    </a>
                    <a href="https://github.com/JcSouzaa01">
                        <img src="/img/sobre/github.png" alt="Github" title='Github' className='size-8'/>
                    </a>
                </div>                
            </div>
            <div class="text-box flex justify-center items-center flex-col text-center md:w-[60%]">
                <h1 style={{fontFamily: 'archivo black'}} className='text-2xl text-white'>Conheça um pouco sobre mim</h1>
                <br></br>
                <span style={{ fontFamily: 'archivo'}} className='text-[#CEC7BF]'>Me chamo José Charles de Souza Moura, tenho 21 anos e atualmente estou no 4º período de Ciências da Computação, onde estou dedicando meu tempo e esforço para expandir meus conhecimentos e habilidades na área da tecnologia.</span>
                <br></br>
                <span style={{ fontFamily: 'archivo'}} className='text-[#CEC7BF]'>Estou em busca de oportunidades de estágio ou propostas profissionais que me permitam aplicar e aprimorar meus conhecimentos, contribuindo de maneira significativa para a equipe e adquirindo experiência prática na área.</span>
            </div>
        </div>
    </main>
  )
}

export default Sobre;