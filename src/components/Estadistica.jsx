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
        <Info><MdOutlineAlarm />Tiempo de estudio (horas)</Info>
        <Info><MdMessage /> Respuestas contestadas</Info>
        <Info><MdMessage /> Respuestas correctas</Info>
        <Info><MdMessage /> Respuestas incorrectas</Info>
      </DivInfo>

      <DivFooter>
        <NavBar />
      </DivFooter>
    </div>

  )
}

export default Estadistica