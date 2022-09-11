import React, { useState, useEffect } from 'react';
import { LoginContainer, Form } from './styled';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { get } from 'lodash'
import * as actions from '../../store/modules/auth/actions'
import { useNavigate } from 'react-router-dom';
import icone from '../../static/icone.png'
export default function LoginPage(props) {
    const dispatch = useDispatch()
    const [data,setData] = useState({})
    const prevPath = get(props, 'location.satate.prevPath', '/home')
    const isLogged = useSelector(state => state.auth.isLoggedIn)
    const navigate = useNavigate()
    const handleData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        let formErrors = false
        const { login, senha } = data
        if(!login || !senha){
            formErrors = true
            toast.error('Preencha todos os campos.')
        }
        if (formErrors) return;
        
        dispatch(actions.loginRequest({login, senha, prevPath}))
        
    }

    useEffect(()=>{
        if(isLogged) navigate(prevPath)
    },[isLogged])
    
    return ( 
        
        <LoginContainer>
            <img src={icone} />
            <Form onSubmit={handleSubmit}>
                <input
                 name="login" 
                 type="text" 
                 placeholder="Login"
                 onChange={handleData}
                 />
                 <input
                 name="senha" 
                 type="password" 
                 placeholder="Senha"
                 onChange={handleData}
                 />
                 <button>Entrar</button>
            </Form>
        </LoginContainer>
    )
}