import React from 'react'
import { Image } from 'react-bootstrap'
import { ButtonProfile, MailProfile, NombreProfile, Titulo } from '../styles/profileStyle'
import { DivFooter } from '../styles/navbarStyle'
import { DivProfile } from '../styles/profileStyle'
import NavBar from './NavBar'

function Perfil() {
  return (
    <div className='profile-div'>
      <Titulo>Perfil</Titulo>

      <DivProfile>
        <Image src="https://res.cloudinary.com/sarapalacio01/image/upload/v1645387775/Quiz-Reto2/profile-francisco_rvm8hh.png" />
        <NombreProfile>Francisco</NombreProfile>
        <MailProfile>francisco@mail.com</MailProfile>
      </DivProfile>

      <ButtonProfile>Cerrar sesión</ButtonProfile>


      <DivFooter>
        <NavBar />
      </DivFooter>
    </div>
  )
}

export default Perfil