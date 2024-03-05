import React from 'react';
import iconosSvg from './svg'

const Boton = (propiedades) => {
    const clicEnlace = (link) => {
        window.open(link, '_blank');
    };

    let boton;

    switch (propiedades.tipo) {
        case 'btn1':
            boton = (
                <button className="btn" onClick={() => clicEnlace(propiedades.enlace)}>
                    <span className={`btn-Cont ${propiedades.svg}-bd`}>
                        {iconosSvg(propiedades.svg)}
                    </span>
                    <span className={`btn-bg ${propiedades.svg}`}></span>
                </button>
            );
            return boton;
        case 'btn2':
            boton = (
                <button className={`btn2 ${propiedades.clase}`} onClick={() => clicEnlace(propiedades.enlace)}>
                        {iconosSvg(propiedades.svg)}
                        <p>{(propiedades.nombre)}</p>
                </button>
            );
            return boton;
        default:
            boton = null;
    }


};

export default Boton;