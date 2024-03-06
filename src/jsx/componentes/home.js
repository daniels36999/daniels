import React , { useState, useEffect }from 'react';
import Header from '../templates/header';
import Footer from '../templates/footer';
import Boton from '../templates/recursos/botones';
import Consola from '../templates/recursos/consola';
import imagenes from '../../assets/imagenes';
import Tarjeta from '../templates/recursos/tarjeta';
  
  

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

         {/* --------------------------------- */}
        <section className='portada'>
            <div className='contenido-portada'>
                <div className='cont-contenido contenedor'>
                    <div className='portada-desc'>
                        <h1>Hola, Soy Daniel Yautibug </h1>
                        <h2 className='port-nombre'>Ing. en Electónica y Telecomunicaciones</h2>
                        <p className='port-descripcion'> Ingeniero en Electrónica y Telecomunicaciones con una formación académica sólida y experiencia en el diseño, desarrollo y optimización de sistemas en electrónica, telecomunicaciones y desarrollo web (Front-End).</p>
                        <div className='portada-btn'>
                            <Boton 
                            tipo='btn2'
                            clase='icono-git'
                            enlace='https://github.com/daniels36999/'
                            svg='github'
                            nombre='Github'/>

                            <Boton 
                            tipo='btn2'
                            clase='icono-git'
                            enlace='https://github.com/daniels36999/'
                            svg=''
                            nombre='Portafolio'/>
                        </div>
                    </div>
                    <div className='portada-img'>
                        <Tarjeta />
                    </div>
                </div>
            </div>

        </section>

        {/* //SECCION DESARROLO WEB*/}
        <section className='informacion contenedor'>
            <h2>Desarrollo Web | Front-End</h2>
            <p className='informacion-texto'>Desarrollo web front-End: Es la interfaz con la que interactúan los usuarios. Implica el diseño y la implementación de elementos como el diseño de páginas, la estructura de la información y la interacción con el usuario, utilizando tecnologías como HTML, CSS y JavaScriptñ.</p>

            <div className='informacion-contenido'>
                <div className='informacion-caracteristicas'>
                    <div className='inf-caracteristicas'>
                        <h3>CONOCIMIENTOS</h3>
                        <p>Actualmente, estoy especializandome en el desarrollo de aplicaciones web (Front-End) utilizando  herramientas y tecnologías de vanguardia. Mi conjunto de habilidades incluye HTML, CSS, JavaScript, Sass, Gulp y React, entre otras. Además, tengo experiencia en optimizar el rendimiento de las páginas web para garantizar que sean completamente responsivas.</p>
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
                        enlace='https://github.com/daniels36999/'
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

        {/* //SECCION TELECTRONICA*/}
        <section className='informacion contenedor'>
            <h2> Ingeniero | Electrónica</h2>
            <p className='informacion-texto'>
                Electrónica: Es el campo de la ingeniería que estudia y aplica dispositivos y sistemas que usan corrientes eléctricas para controlar señales y transmitir información. Implica el diseño y mantenimiento de dispositivos electrónicos y sistemas complejos como computadoras y equipos de comunicación.</p>

            <div className='informacion-contenido'>
                <div className='informacion-imagen'>
                    <img className='img-electronica' src={imagenes.fondo} alt="Imagen Logo"/>
                </div>
                <div className='informacion-caracteristicas'>
                    <div className='inf-caracteristicas'>
                        <h3>CONOCIMIENTOS</h3>
                        <p>"En la actualidad soy ingeniero en Electrónica y Telecomunicaciones con habilidades destacadas en el diseño y construcción de circuitos impresos PCB, diseño 3D de piezas con creación de planos técnicos, instalaciones electricas y mantenimiento preventivo y correctivo de computadoras (software y hardware). Estas habilidades, junto con otras adquiridas a lo largo de mi carrera estudiantil y profesional, me permiten abordar proyectos de manera integral y eficiente."</p>
                    </div>
                    <div className='inf-home-lista'>
                        <ul className='home-lista'>
                            <li>PCB</li>
                            <li>Instalaciones Eléctricas</li>
                            <li>Circuitos Electrónicos</li>
                        </ul>
                        <ul className='home-lista'>
                            <li>Arduino</li>
                            <li>Proteus</li>
                            <li>Fritzing</li>
                        </ul>
                    </div>
                    <div className='informacion-botones'>
                    <Boton 
                        tipo='btn2'
                        clase='icono-git'
                        enlace='https://github.com/daniels36999/'
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
            </div>
        </section>

       {/* //SECCION TELECOMUNICACIONES*/}
       <section className='informacion contenedor'>
            <h2> Ingeniero | Telecomunicaciones</h2>
            <p className='informacion-texto'>
                Telecomunicaciones: Es una disciplina que se enfoca en el diseño, desarrollo y mantenimiento de sistemas de comunicación, como redes de telefonía, transmisión de datos, televisión y radio. Involucra el uso de tecnologías como la electrónica, las telecomunicaciones y la informática para crear sistemas de comunicación eficientes y seguros.</p>

            <div className='informacion-contenido'>
                <div className='informacion-caracteristicas'>
                    <div className='inf-caracteristicas'>
                        <h3>CONOCIMIENTOS</h3>
                        <p>"Mi experiencia en el área de las telecomunicaciones incluye la revisión y mantenimiento de Switches de distribución, la actualización de inventarios de equipos de infraestructura y conocimientos en redes y fibra optica. Estas habilidades, junto con otras adquiridas en mi carrera estudiantil y profesional, me han permitido destacar en el campo de las telecomunicaciones."</p>
                    </div>
                    <div className='inf-home-lista'>
                        <ul className='home-lista'>
                            <li>Antenas</li>
                            <li>Python</li>
                            <li>Administracion de SO.</li>
                        </ul>
                        <ul className='home-lista'>
                            <li>Switch, Routers</li>
                            <li>Redes Lan</li>
                            <li>Fíbra Óptica</li>
                        </ul>
                    </div>
                    <div className='informacion-botones'>
                    <Boton 
                        tipo='btn2'
                        clase='icono-git'
                        enlace='https://github.com/daniels36999/'
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
                <div className='informacion-imagen'>
                    <img src={imagenes.electronica} alt="Imagen Logo"/>
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