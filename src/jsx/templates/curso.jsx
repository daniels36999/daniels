import React from 'react';
import imagenes from '../../assets/imagenes';
import Iconos from './recursos/svg';

const Curso = (varCurso) => {

    const clicEnlace = (url) => {
        window.open(url, '_blank');
      };

    
    return (
        <div className='cursos-progra'>
            <div className='curso-imagen'>
                <button onClick={() => clicEnlace('https://daniels36999.github.io/portafolio-daniels')} className="curso-btn"> 
                    <img src={imagenes[varCurso.imagen]} alt="Imagen Logo" />
                </button>
            </div>
            <div className='curso-titulo'>
                <h4>{varCurso.titulo}</h4>
                <p>{varCurso.descripcion}</p>
            </div>
            <div className='curso-enlace'>
                {varCurso.enlaces.map((enlaces, index) => (
                    <button key={index}>
                            {Iconos(enlaces)}
                    </button>
                ))}
            </div>
            <div className='curso-tecnologia'>
                {varCurso.tecnologias.map((tecnologia, index) => (
                    <button className={tecnologia} key={index}>
                        {Iconos(tecnologia)}
                        <p class="texto">{tecnologia}</p>
                    </button>
                ))}
            </div>

        </div>
    );
};

export default Curso;