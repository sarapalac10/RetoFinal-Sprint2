import React, { Component, useEffect } from 'react'
import { Image } from 'react-bootstrap'
import { ButtonProfile, MailProfile, NombreProfile, Titulo } from '../styles/profileStyle'
import { DivFooter } from '../styles/navbarStyle'
import { DivProfile } from '../styles/profileStyle'
import NavBar from './NavBar'
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom'

const cookies = new Cookies();


function Perfil() {
  const navigate = useNavigate()
  
  const cerrarSesion=()=>{
      cookies.remove('id', {path: "/"});
      cookies.remove('apellido', {path: "/"});
      cookies.remove('nombre', {path: "/"});
      cookies.remove('email', {path: "/"});
      
      // navigate('/RetoFinal-Sprint2/login'); // <==== CAMBIE ESTO 
  }

  useEffect(() => {
    console.log('encontro cookies');
    console.log(cookies.get('email'));
    if(!cookies.get('email')){
      console.log('No encontro cookies');
      return navigate('/RetoFinal-Sprint2/login')
    }
})

return (
    <div className='profile-div'>
      <Titulo>Perfil</Titulo>

      <DivProfile>
        <Image src="https://res.cloudinary.com/sarapalacio01/image/upload/v1645318305/Quiz-Reto2/daily-bits-green-logo_vpq9e3.png" />
        <NombreProfile>{cookies.get('nombre')+' '+cookies.get('apellido')}</NombreProfile>
        <MailProfile>{cookies.get('email')}</MailProfile>
      </DivProfile>

      <ButtonProfile onClick={() => cerrarSesion()}>Cerrar sesión</ButtonProfile>

      <DivFooter>
        <NavBar />
      </DivFooter>
    </div>
  )
}

export default Perfil;

