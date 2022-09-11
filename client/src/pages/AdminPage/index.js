import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import Header from "../../components/Header"

export default function AdminPage() {
    const [user,setUser] = useState("")
    
    useEffect(()=> {
        api.get('/user').then(response => {
            setUser(response.data)
        })
    }, [])
    
    return (
        <>
            <Header />
            
        </>
    )
}