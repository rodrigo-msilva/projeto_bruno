import React, { useState } from 'react';
import { LoginContainer, Form } from './styled';
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import * as actions from '../../store/modules/auth/actions'


export default function LoginPage() {
    const dispatch = useDispatch()
    const [data,setData] = useState({})

    const handleData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        let formErrors = false
        const { login, senha_virtual } = data
        if(!login || !senha_virtual){
            formErrors = true
            toast.error('PREENCHA TODOS OS CAMPOS')
        }

        if (formErrors) return;

        dispatch(actions.loginRequest(data))
    }
    
    return ( 
        <LoginContainer>
            <Form onSubmit={handleSubmit}>
            
                <input
                 name="login" 
                 type="text" 
                 placeholder="Login"
                 onChange={handleData}
                 />
                 <input
                 name="senha_virtual" 
                 type="password" 
                 placeholder="Senha"
                 onChange={handleData}
                 />
                 <button>Entrar</button>
            </Form>
        </LoginContainer>
    )
}