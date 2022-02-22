import React from 'react'
import { DivFooter } from '../styles/navbarStyle'
import { Titulo } from '../styles/profileStyle'
import NavBar from './NavBar'
import { MdKeyboardArrowDown, MdMessage, MdOutlineAlarm } from "react-icons/md";
import { DivInfo, Info, Subtitulo } from '../styles/estadisticaStyle';

function Estadistica() {
  return (
    <div>
      <Titulo>Estadística</Titulo>
      <Subtitulo>Los últimos 7 días <MdKeyboardArrowDown className="icon" /> </Subtitulo>

      <DivInfo>
        <Info><MdOutlineAlarm />Tiempo de estudio (horas) <span className='estad-1'>1</span> </Info>
        <Info><MdMessage /> Respuestas contestadas <span className='estad-1'>40</span> </Info>
        <Info><MdMessage /> Respuestas correctas <span className='estad-2'>20</span> </Info>
        <Info><MdMessage /> Respuestas incorrectas <span className='estad-3'>20
          </span> </Info>
      </DivInfo>

      <DivFooter>
        <NavBar />
      </DivFooter>
    </div>

  )
}

export default Estadistica