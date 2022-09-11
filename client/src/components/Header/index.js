import React, { useEffect } from "react";
import { FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'
import { Nav } from "./styled";
import logo from '../../static/CC.png'
import { useSelector, useDispatch } from "react-redux";

import * as actions from '../../store/modules/auth/actions'

export default function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const username = useSelector(state => {
        return state.auth.user.nome
    })

    

    const isLogged = useSelector(state => {
        return state.auth.isLoggedIn
    })

    function handleLogout(e) {
        e.preventDefault();
        dispatch(actions.loginFailure())
    }

    


    return (
        <Nav>
            {
                isLogged ?
            <div className="container-left">
                <FaUserAlt className="nav-icon user-icon"  />
                <p className="nav-icon user-name">{username}</p>
            </div> : <div className="container-left" />
            }
            
            <img src={logo} className="logo-cc" alt=""/>
            {
                isLogged ?
                <> 
            <div className="container-right">
                
                
            </div>
            <Link onClick={handleLogout} to="/login">
                <FaSignOutAlt style ={{"marginTop":"-3px","color":"GrayText"}}className="nav-link sign-out-icon"/>
            </Link>
            
            </>: <div className="container-right" />
            }
        </Nav>
    )
}