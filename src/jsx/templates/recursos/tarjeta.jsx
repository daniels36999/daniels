import React from 'react';
import Boton from './botones';
import imagenes from '../../../assets/imagenes';

const Tarjeta = () => {

    return (
        <div className='tarjeta'>
            <div className='tarjeta-img'>
                <img src={imagenes.foto} alt="Imagen Logo" />
            </div>
            <div className='tarjeta-descripcion'>
                <h3>Daniel Yautibug</h3>
                <p>Ing. Electrónica y Telecomunicaciones</p>
            </div>
            <div className='tarjeta-btn'>
                <Boton 
                    tipo='btn2'
                    clase='icono-git'
                    enlace='https://www.linkedin.com/in/daniel-patricio-yautibug-65a656209/'
                    svg='linkedin'
                    nombre='Link...'/>
            </div>
            
            
        </div>

        );
};

export default Tarjeta;