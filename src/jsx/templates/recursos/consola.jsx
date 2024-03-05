import React , { useState, useEffect }from 'react';
const currentDate = new Date();
const year = currentDate.getFullYear();

const textArray = [
    `[${year}]@(Daniels)-> Electronica`,
    `[${year}]@(Daniels)-> Telecomunicaciones`,
    `[${year}]@(Daniels)-> Desarrollador Front-End`,
    `[${year}]@(Daniels)-> HTML, CSS, JS - React`,
    `[${year}]@(Daniels)-> SASS, Gulp,`,
    // Agrega aquí más
  ];

const Typewriter = () => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
  
    useEffect(() => {
      let interval;
      if (textArray[index] !== text) {
        interval = setInterval(() => {
          const currentText = textArray[index];
          const newText = currentText.substring(0, text.length + 1);
          setText(newText);
          if (newText === currentText) {
            clearInterval(interval);
            setTimeout(() => {
              if (index + 1 < textArray.length) {
                setIndex(index + 1);
                setText('');
              } else {
                setIndex(0);
                setText('');
              }
            }, 1000); // Tiempo para mantener los párrafos mostrados
          }
        }, 50); // Velocidad de escritura
      }
      return () => clearInterval(interval);
    }, [index, text]);
  
    return (
      <div className="typewriter-container">
        {textArray.map((paragraph, idx) => (
          <div key={idx} className={`paragraph ${index >= idx ? 'visible' : ''}`}>
            {paragraph}
          </div>
        ))}
        <div className="text">{text}</div>
        {console.log(text)}
      </div>
    );
  };


//COSOLA--------------------------------------------
const Consola = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [allTexts, setAllTexts] = useState([]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (currentText.length < textArray[currentIndex].length) {
          setCurrentText((prevText) => prevText + textArray[currentIndex][prevText.length]);
        } else {
          setAllTexts((prevAllTexts) => [...prevAllTexts, textArray[currentIndex]]);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
          setCurrentText('');
        }
      }, 50);
  
      return () => clearInterval(interval);
    }, [currentIndex, currentText]);
  
    useEffect(() => {
      if (allTexts.length === textArray.length) {
        setTimeout(() => {
          setAllTexts([]);
          setCurrentIndex(0);
          setCurrentText('');
        }, 2000); // Tiempo de espera antes de reiniciar
      }
    }, [allTexts]);
{/* --------------------------------- */}
return(
    <div className='consola'>
      <div className='consola-head'>
          <h5>CMD System</h5>
          <div className='consola-btn'>
            <div className='consola-btn-1 con-btn'></div>
            <div className='consola-btn-2 con-btn'></div>
            <div className='consola-btn-3 con-btn'></div>
          </div>
      </div>

      <div className='consola-contenido'>
        <div className='consola-logo'>
          {artLogo()}
        </div>
        <div className='consola-texto'>
          {allTexts.map((text, index) => (
            <p key={index} className='con-text'>{text}</p>
            ))}
            <p className='con-text'>{currentText}</p>
        </div>
      </div>
    </div>
)
}

function artLogo(){
    return(
        <div className='contenido-logo'>                                                                                                                                                  
            <pre>{"XXXXXXX       XXXXXXX                 DDDDDDDDDDDDD                                              iiii                      lllllll   '::::'                "}</pre>
            <pre>{"X:::::X       X:::::X                 D::::::::::::DDD                                          i::::i                     l:::::l   '::::'                "}</pre>
            <pre>{"X:::::X       X:::::X                 D:::::::::::::::DD                                         iiii                      l:::::l   ':::'                 "}</pre>
            <pre>{"X::::::X     X::::::X                 DDD:::::DDDDD:::::D                                                                  l:::::l  ':::'                  "}</pre>
            <pre>{"XXX:::::X   X:::::XXX                   D:::::D    D:::::D   aaaaaaaaaaaaa   nnnn  nnnnnnnn    iiiiiii     eeeeeeeeeeee     l::::l            ssssssssss   "}</pre>
            <pre>{"   X:::::X X:::::X                      D:::::D     D:::::D  a::::::::::::a  n:::nn::::::::nn  i:::::i   ee::::::::::::ee   l::::l          ss::::::::::s  "}</pre>
            <pre>{"    X:::::X:::::X                       D:::::D     D:::::D  aaaaaaaaa:::::a n::::::::::::::nn  i::::i  e::::::eeeee:::::ee l::::l        ss:::::::::::::s "}</pre>
            <pre>{"     X:::::::::X      ---------------   D:::::D     D:::::D           a::::a nn:::::::::::::::n i::::i e::::::e     e:::::e l::::l        s::::::ssss:::::s"}</pre>
            <pre>{"     X:::::::::X      -:::::::::::::-   D:::::D     D:::::D    aaaaaaa:::::a   n:::::nnnn:::::n i::::i e:::::::eeeee::::::e l::::l         s:::::s  ssssss "}</pre>
            <pre>{"    X:::::X:::::X     ---------------   D:::::D     D:::::D  aa::::::::::::a   n::::n    n::::n i::::i e:::::::::::::::::e  l::::l           s::::::s      "}</pre>
            <pre>{"   X:::::X X:::::X                      D:::::D     D:::::D a::::aaaa::::::a   n::::n    n::::n i::::i e::::::eeeeeeeeeee   l::::l              s::::::s   "}</pre>
            <pre>{"XXX:::::X   X:::::XXX                   D:::::D    D:::::D a::::a    a:::::a   n::::n    n::::n i::::i e:::::::e            l::::l        ssssss   s:::::s "}</pre>
            <pre>{"X::::::X     X::::::X                 DDD:::::DDDDD:::::D  a::::a    a:::::a   n::::n    n::::ni::::::ie::::::::e          l::::::l       s:::::ssss::::::s"}</pre>
            <pre>{"X:::::X       X:::::X                 D:::::::::::::::DD   a:::::aaaa::::::a   n::::n    n::::ni::::::i e::::::::eeeeeeee  l::::::l       s::::::::::::::s "}</pre>
            <pre>{"X:::::X       X:::::X                 D::::::::::::DDD      a::::::::::aa:::a  n::::n    n::::ni::::::i  ee:::::::::::::e  l::::::l        s:::::::::::ss  "}</pre>
            <pre>{"XXXXXXX       XXXXXXX                 DDDDDDDDDDDDD          aaaaaaaaaa  aaaa  nnnnnn    nnnnnniiiiiiii    eeeeeeeeeeeeee  llllllll         sssssssssss    "}</pre>
            <pre className='pre-fin'>{"//-------------------------------------------------------------------------------------------------------------------------------------------------------//"}</pre>
        </div>
    );
}

export default Consola;