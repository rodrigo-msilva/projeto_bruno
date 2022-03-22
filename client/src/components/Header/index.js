import React from "react";
import { FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { Nav } from "./styled";

export default function Header({username="Rodrigo Matos da Silva"}) {
    
    return (
        <Nav>
            <div className="container-left">
                <FaUserAlt className="nav-icon user-icon"  />
                <p className="nav-icon user-name">{username}</p>
            </div>
            <div className="container-right">
                <Link to='/home'className="nav-link">Visões</Link>
                <Link to='/admin' className="nav-link" >Admin</Link>
            </div>
            <FaSignOutAlt className="nav-link sign-out-icon"/>
        </Nav>
    )
}