import React , { useState, useEffect }from 'react';
import Header from '../templates/header';
import Footer from '../templates/footer';
import Boton from '../templates/recursos/botones';
import Consola from '../templates/recursos/consola';
  

const Home = () => {

    const clicProyectos= (url) => {
        window.open(url, '_blank');
      };

    const clicEnlace = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div >

            <div class="space stars1"></div>
            <div class="space stars2"></div>
            <div class="space stars3"></div>

            <div className='home'>
            {/* //HEADER */}
            <Header />

            {/* //SECCION DESARROLO WEB*/}
            <section className='informacion contenedor'>

                <h2>Desarrollo Web | Front-End</h2>
                <p className='informacion-texto'>Esta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonitasta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonitasta es una pagina bonita Esta es una pagina bonita Esta es una pagina bonita</p>

                <div className='informacion-contenido'>
                    <div className='informacion-caracteristicas'>
                        <div className='inf-caracteristicas'>
                            <h3>CONOCIMIENTOS</h3>
                            <p>Actualmente, estoy especializandome en el desarrollo de aplicaciones web utilizando (Front-End) herramientas y tecnologías de vanguardia. Mi conjunto de habilidades incluye HTML, CSS, JavaScript, Sass, Gulp y React, entre otras. Además, tengo experiencia en optimizar el rendimiento de las páginas web para garantizar que sean completamente responsivas.</p>
                        </div>
                        <div className='inf-home-lista'>
                            <ul className='home-lista'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Java Script</li>
                            </ul>
                            <ul className='home-lista'>
                                <li>SASS</li>
                                <li>Gulp</li>
                                <li>React</li>
                            </ul>
                        </div>
                        <div className='informacion-botones'>
                        <Boton 
                            tipo='btn2'
                            clase='icono-git'
                            enlace='https://portafolio-daniels.netlify.app/'
                            svg='github'
                            nombre='Github'/>
                        <Boton 
                            tipo='btn2'
                            clase=''
                            enlace='https://portafolio-daniels.netlify.app/'
                            svg=''
                            nombre='Saber Mas...'/>

                        </div>
                    </div>

                    <div class="informacion-consola">
                       <Consola /> 
                    </div>
                </div>
            </section>

            {/* //FOOTER */}
            <Footer />
            </div>
        </div>
    );
};

export default Home;