import React, { Component } from 'react'
import { DivForm } from '../styles/CardQuestion'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ContainerStyle, TitleHome } from '../styles/homeStyle'
import NavBar from './NavBar'
import { DivFooter } from '../styles/navbarStyle'

export default class Home extends Component {
    render() {
        return (
            <DivForm>
                <ContainerStyle>
                    <TitleHome>Practica tus conocimientos en la categoría que prefieras.</TitleHome>
                    <div>
                        <Link to="/RetoFinal-Sprint2/questionHTML" className="nav-link"> <Image src="https://res.cloudinary.com/sarapalacio01/image/upload/v1645318304/Quiz-Reto2/Categoria-html_nlmuza.png" rounded width="100px"/> </Link>
                    </div>
                    <div>
                        <Link to="/RetoFinal-Sprint2/questionCSS" className="nav-link"> <Image src="https://res.cloudinary.com/sarapalacio01/image/upload/v1645318304/Quiz-Reto2/Categoria-css_ns2ytm.png" rounded width="100px" style={{ marginRight: "25px" , marginTop: "25px" }} /> </Link>
                        <Link to="/RetoFinal-Sprint2/questionJS" className="nav-link"> <Image src="https://res.cloudinary.com/sarapalacio01/image/upload/v1645318304/Quiz-Reto2/Categoria-js_clmjzv.png" rounded width="100px" /> </Link>
                    </div>
                    <div>
                        <Link to="/RetoFinal-Sprint2//questionFIGMA" className="nav-link"> <Image src="https://res.cloudinary.com/sarapalacio01/image/upload/v1645318304/Quiz-Reto2/Categoria-figma_djaqpd.png" rounded width="100px" style={{ marginRight: "25px" , marginTop: "25px"}} /> </Link>
                        <Link to="/RetoFinal-Sprint2/questionUX" className="nav-link"> <Image src="https://res.cloudinary.com/sarapalacio01/image/upload/v1645318304/Quiz-Reto2/Categoria-ux_gui8ri.png" rounded width="100px" /> </Link>
                    </div>
                    <DivFooter>
                        <NavBar />
                    </DivFooter>
                </ContainerStyle>

            </DivForm>
            
        )
    }
}
