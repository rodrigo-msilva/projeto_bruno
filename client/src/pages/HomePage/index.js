import React, {useEffect, useState} from 'react';
import api from '../../services/api'
import { BsFillBarChartFill,BsTable,BsClockHistory,BsCalendarEvent } from 'react-icons/bs'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import Header from "../../components/Header"
import BarChart from '../../components/Charts/BarChart';
import { useNavigate } from 'react-router-dom';
import { HomeContainer } from './styled';

import TableChart from '../../components/Charts/TableChart';


export default function HomePage() {
    const [icon, setIcon] = useState(true)
    const [status, setStatus] = useState("date")
    const [titleContainer, setTitleContainer] = useState("Gráfico de Usuários")
    const isLogged = useSelector(state => state.auth.isLoggedIn)
    const navigate = useNavigate()
    
    useEffect(()=>{
        if(!isLogged) navigate('/login')
    },[isLogged])
    
    useEffect(()=> {
        if (!icon) {
            setTitleContainer("Tabela Analítica")
        } else {
            setTitleContainer("Gráfico de Usuários")
        }
    },[icon])

    const handleIcon = (e) => {
        setIcon(!icon)
        handleStatus(e.target.value)
    }

    const handleStatus = (e) => {
        setStatus(e.target.value)
    }

    return (
        <>
            <Header />
            <HomeContainer>
                <div className='container-header'>
                    <h1>{titleContainer}
                        {
                            icon ? 
                            <BsTable value="other" className='table-icon' onClick={handleIcon}/>
                            : <BsFillBarChartFill value="other" className='table-icon' onClick={handleIcon}/>
                        }  
                    </h1>
                    <hr></hr>
                </div>
                {
                    titleContainer === "Gráfico de Usuários" ?                 
                        <Stack spacing={2} direction="row" style={{"float":"right","margin":"5px 13px"}}>
                            <Button value="date" variant="text" onClick={handleStatus}>MENSAL<BsCalendarEvent style={{"marginLeft":"5px"}}/></Button>
                            <Button value="other" variant="text" onClick={handleStatus}>ONLINE<BsClockHistory style={{"marginLeft":"5px"}}/></Button>
                        </Stack> : null
                }
                {
                    icon ? <><BarChart status={status} /></>
                    : <TableChart />
                }
            </HomeContainer>
        </>
    )
}