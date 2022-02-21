import React, { useState } from 'react'
import { Image  } from 'react-bootstrap'
import { askUX } from '../QuizData';
import { ButtonStyle, DivProgress, DivTitle, Titulo } from '../styles/CardQuestion'
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";

function QuestionUX() {
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [puntuacion, setPuntuacion] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    function handleAnswerSubmit(isCorrect, e){
        
        //Añadir puntos
        if (isCorrect) setPuntuacion (puntuacion + 1);
        //Añadir estilo
        e.target.classList.add(isCorrect ? "correct" : "incorrect");
        //Cambiar a la próxima pregunta 

        setTimeout(() => {
            if(preguntaActual === askUX.length -1 ){
                setIsFinished(true);
            } else {
                setPreguntaActual(preguntaActual +1);
            }
        },1500)
    }
        if (isFinished) 
        return(
            <main className='app'>
                    <span> {" "}El juego terminó. Obtuviste {puntuacion} de {askUX.length} {" "}</span>
                    <button onClick={()=> (window.location.href="/")}>Volver al Inicio</button>
            </main>
        )
    

    return (
        <main className='app'>
            <DivProgress>
                <AiOutlineClose className="iconGameX" />
                <Image className='barra-progreso' src="https://res.cloudinary.com/sarapalacio01/image/upload/v1645409420/Quiz-Reto2/Rectangle_l0rtj2.png" />
                <AiOutlineHeart className="iconGameC" />
            </DivProgress>

            <DivTitle>
                <Image className='imgQuestion' src="https://res.cloudinary.com/sarapalacio01/image/upload/v1645318304/Quiz-Reto2/Character1_nh99td.png" />
                <Titulo>{askUX[preguntaActual].question}</Titulo>
            </DivTitle>
            
            <div>
                {askUX[preguntaActual].opciones.map((resp) => (
                    <ButtonStyle key={resp.respuesta} onClick={(e)=> handleAnswerSubmit(resp.isCorrect, e)}>
                        {resp.respuesta}
                    </ButtonStyle>
                ))}
            </div>
                
            <div>
                <span>Pregunta {preguntaActual +1 } de</span> {askUX.length}
            </div>

        </main>
    );
}

export default QuestionUX;