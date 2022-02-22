import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import { ButtonProfile, MailProfile, NombreProfile, Titulo } from '../styles/profileStyle'
import { DivFooter } from '../styles/navbarStyle'
import { DivProfile } from '../styles/profileStyle'
import NavBar from './NavBar'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Perfil extends Component {
    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('apellido', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('email', {path: "/"});
        window.location.href="/login";
    }

    componentDidMount() {
        if(!cookies.get('email')){
          window.location.href="/login";
        }
    }

    render() {
        console.log('id: '+ cookies.get('id'));
        console.log('apellido: '+cookies.get('apellido'));
        console.log('nombre: '+cookies.get('nombre'));
        console.log('email: '+cookies.get('email'));
        return (
            <div className='profile-div'>
              <Titulo>Perfil</Titulo>
        
              <DivProfile>
                <Image src="https://res.cloudinary.com/sarapalacio01/image/upload/v1645387775/Quiz-Reto2/profile-francisco_rvm8hh.png" />
                <NombreProfile>{cookies.get('nombre')+' '+cookies.get('apellido')}</NombreProfile>
                <MailProfile>{cookies.get('email')}</MailProfile>
              </DivProfile>
        
              <ButtonProfile onClick={()=>this.cerrarSesion()}>Cerrar sesión</ButtonProfile>
        
              <DivFooter>
                <NavBar />
              </DivFooter>
            </div>
        );
    }
}

export default Perfil;

