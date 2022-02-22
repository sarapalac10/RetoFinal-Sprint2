import React, { Component } from 'react';
import axios from 'axios';
// import md5 from 'md5';
import Cookies from 'universal-cookie';
import { Image } from 'react-bootstrap';
import { ContLoginArriba, TitleLoginArriba } from '../styles/LoginStyle';
import { url } from '../helpers/url';
import { Navigate } from 'react-router-dom';

const cookies = new Cookies();

class Login extends Component {
    state={
        form:{
            email: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        // await axios.get(url, {params: {email: this.state.form.email, password: md5(this.state.form.password)}})
        await axios.get(url, {params: {email: this.state.form.email, password: this.state.form.password}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('apellido', respuesta.apellido, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('email', respuesta.email, {path: "/"});
                // alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido}`);
                alert("Bienvenido :D ");
                <Navigate to = './RetoFinal-Sprint2/home' />;
                // window.location.href="/RetoFinal-Sprint2/home";
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }

    componentDidMount() {
        if(cookies.get('username')){
            <Navigate to = './RetoFinal-Sprint2/home' />
            // window.location.href="/RetoFinal-Sprint2/home";
        }
    }
    
    render() {
        return (
        <div className="containerPrincipal-login">
            <ContLoginArriba>
                <Image src='https://res.cloudinary.com/sarapalacio01/image/upload/v1645318305/Quiz-Reto2/daily-bits-purple-box_rumxpf.png' width="150px" />
                <TitleLoginArriba>Iniciar Sesión</TitleLoginArriba>
                <Image src='https://res.cloudinary.com/sarapalacio01/image/upload/v1645410197/Quiz-Reto2/button-google_mvqw5c.png' />
            </ContLoginArriba>

        <div className="containerSecundario-login">
            <hr/>
            <div className="form-group">
                <label>Email: </label>
                <br />
                <input type="text" className="form-control" name="email" onChange={this.handleChange} placeholder="Ingresa tu email" />
                <br />
                <label>Contraseña: </label>
                <br />
                <input type="password" className="form-control" name="password" onChange={this.handleChange} placeholder="Ingresa tu contraseña" />
                <br />
                <button className="btn-login" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
                <p className='span-login'>¿Se te olvidó tu contraseña?</p>
                <p>¿Aún no tienes una cuenta? <a href="/RetoFinal-Sprint2/form" className='span-login'>Inscribirse</a></p>
            </div>
        </div>
        </div>
        );
    }
}

export default Login;
