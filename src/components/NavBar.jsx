import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FiHome } from 'react-icons/fi';
import { BiUser , BiLineChart } from "react-icons/bi";

export default class NavBar extends Component {
    render() {
        return (
            <Nav>
                <Link to="/home" className="nav-link"> <FiHome className="icon" /></Link>
                <Link to="/estadistica"> <BiLineChart className="icon" /> </Link>
                <Link to="/perfil"> <BiUser className="icon" /> </Link>
            </Nav>
        )
    }
}