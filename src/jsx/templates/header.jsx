import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';

import Boton from './recursos/botones';
import imagenes from '../../assets/imagenes';
import iconosSvg  from './recursos/svg';

const Header = () => {

    // TOGLE PARA MENU AMBURGUEZA
    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
        // console.log("menú:", menuAbierto ? "Abierto" : "Cerrado");
    };

    // DIMENCIONES PARA ELIMINAR CLASE
    useEffect(() => {
        const ventanaTam = () => {
            if (window.innerWidth >= 768) {
                setMenuAbierto(false);
            }
        };

        window.addEventListener('resize', ventanaTam);
        return () => {
            window.removeEventListener('resize', ventanaTam);
        };
    }, []);

    return (
        <header className='header'>
            <div className='header_logo'> {/* -LOGO */}
                <Link className="header_logo-link" to="/daniels" >
                    <img src={imagenes.logo} alt="Imagen Logo" />
                </Link>
            </div>
            <div className='header_links'> {/* NAVEGACION*/}
                 <div className='header_links-amburguesa' onClick=  {toggleMenu}>
                    {iconosSvg('amburguesa')}
                </div>
                <div className={`header_links-enlace ${menuAbierto ? 'menu-abierto' : ''}`}>
                    <div className='enlace'>
                            <Link  to="/daniels" >&gt; Inicio</Link>
                        </div>
                        <div className='enlace'>
                            <Link to="/nosotros" >&gt;  Portafolio</Link>
                        </div>
                        <div className='enlace'>
                            <Link to="/home" >&gt;  Servicios</Link>
                        </div>
                        <div className='enlace'>
                            <Link to="/nosotros" >&gt;  Blog</Link>
                        </div>
                        <div className='enlace'>
                            <Link to="/nosotros" >&gt;  Contacto</Link>
                        </div>
                    </div>
                                   
            </div>

            <div className="header_iconos"> {/* ICONOS*/}
                <Boton 
                    tipo='btn1'
                    enlace='https://portafolio-daniels.netlify.app/'
                    svg='web'/>

                <Boton 
                    tipo='btn1'
                    enlace='https://github.com/daniels36999/'
                    svg='github'/>

                <Boton 
                    tipo='btn1'
                    enlace='https://www.linkedin.com/in/daniel-patricio-yautibug-65a656209/'
                    svg='linkedin'/>

                <Boton 
                    tipo='btn1'
                    enlace='https://grabcad.com/daniel.patricio.yautibug-1'
                    svg='grabcad'/>
            </div> 
        </header>
    );
  };
  
  export default Header