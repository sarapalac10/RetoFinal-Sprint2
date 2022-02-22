import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { url } from '../helpers/url';
import { ContLoginArriba, TitleLoginArriba } from '../styles/LoginStyle';

const cookies = new Cookies();

function Login() {
    const navigate = useNavigate()
    const [form, setForm] = useState( {
        email: '',
        password: ''
    })

    const handleChange= e=>{
        setForm({
                ...form,
                [e.target.name]: e.target.value
        });
    }

    const useIniciarSesion=async()=>{
        console.log('form', form)
        await axios.get(url, {params: {email: form.email, password: form.password}})
        .then(response=>{
            console.log('response.data', response.data)
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                let respuesta = response[0];
                console.log('respuesta', respuesta)
                console.log(respuesta.id);
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('apellido', respuesta.apellido, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('email', respuesta.email, {path: "/"});
                alert("Bienvenido :D ");
                navigate('/RetoFinal-Sprint2/home')
                // window.location.href="/RetoFinal-Sprint2/home";
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }

    useEffect(() => {
        if(cookies.get('email')){
            navigate('/RetoFinal-Sprint2/home')
        }
    })
    

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
                <input type="text" className="form-control" name="email" onChange={handleChange} placeholder="Ingresa tu email" />
                <br />
                <label>Contraseña: </label>
                <br />
                <input type="password" className="form-control" name="password" onChange={handleChange} placeholder="Ingresa tu contraseña" />
                <br />
                <button className="btn-login" onClick={useIniciarSesion}>Iniciar Sesión</button>
                <p className='span-login'>¿Se te olvidó tu contraseña?</p>
                <p>¿Aún no tienes una cuenta? <Link to="/RetoFinal-Sprint2/form" className='span-login'>Inscribirse</Link></p>
            </div>
        </div>
        </div>
        );
    }


export default Login