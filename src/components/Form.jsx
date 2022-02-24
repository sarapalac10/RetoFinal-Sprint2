import axios from 'axios';
import React, { useState } from 'react';
import { url } from '../helpers/url';
import '../styles/FormUser.css';
import { DivProfile } from '../styles/profileStyle';

export const Form = () => {
    const [user, setUser] = useState({
        id: "",
        apellido: "",
        nombre: "",
        email: "",
        password: "",

    });
 
    const {apellido, nombre, email, password } = user;

    const handleOnChange = ( {target} ) => {
        setUser( {
            ...user,
            [target.name] : target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setTimeout(() => {
            (window.location.href="/RetoFinal-Sprint2/login")
          },2000)
    }

    const postData = () => {
        if(apellido!== '' && email!== '' && password!== '' && password.length > 5 ){
            axios.post(url, user)
                .then(response => {
                    console.log(response.data)
                }).catch(error => {
                    console.log(error)
                })
                console.log('holaaaaa');
                console.log('password', password)
                console.log(password.length)
                alert("SE HA REGISTRADO EL USUARIO");
        }else{
            alert("La contraseña debe contener mínimo 6 caracteres");
        }
    }

    return (
        <DivProfile>
           <form id="formulario" onSubmit={handleSubmit}>
           <h2>Registro de Usuario</h2>
           <hr/>
            <div className='style-form'>
                <div>
                    <label>Nombre</label>
                    <input id="inputNombre" name="nombre" onChange={handleOnChange} value={nombre} />
                </div>
                <div>
                    <label>Apellido</label>
                    <input id="inputApellido" name="apellido" onChange={handleOnChange} value={apellido} />
                </div>
                <div>
                    <label>Email</label>
                    <input id="inputEmail" name="email" onChange={handleOnChange} value={email} />
                </div>
                <div>
                    <label>Password</label>
                    <input id="inputPassword" type="password" name="password" onChange={handleOnChange} value={password} />
                </div>
            </div>
               <div>
                   <button id="btnRegistro" onClick={postData} >Enviar</button> 
                </div>
           </form>
        </DivProfile>
    )
}
