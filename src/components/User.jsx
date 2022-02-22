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
 
    const {id, apellido, nombre, email, password } = user;

    const handleOnChange = ( {target} ) => {
        setUser( {
            ...user,
            [target.name] : target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("SE HA REGISTRADO EL USUARIO")

        setTimeout(() => {
            (window.location.href="/login")
          },3000)
    }

    const postData = () => {
        axios.post(url, user)
            .then(response => {
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <DivProfile>
           <form id="formulario" onSubmit={handleSubmit}>
           <h2>Registro de Usuario</h2>
           <hr/>
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

               <div>
                   <button id="btnRegistro" onClick={postData} >Enviar</button> 
               </div>
           </form>
        </DivProfile>
    )
}
