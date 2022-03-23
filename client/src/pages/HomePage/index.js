import React, {useEffect, useState} from 'react';
import api from '../../services/api'
import { FaFileCsv } from 'react-icons/fa'
import { BsFillBarChartFill,BsTable } from 'react-icons/bs'


import Header from "../../components/Header"
import BarChart from '../../components/Charts/BarChart';

import { HomeContainer } from './styled';
import CardChart from '../../components/Charts/CardChart';
import TableChart from '../../components/Charts/TableChart';


export default function HomePage() {
    const [icon, setIcon] = useState(true)
    const [status, setStatus] = useState(false)
    const [titleContainer, setTitleContainer] = useState("Gráfico de Usuários")
    const [logons, setLogons] = useState({})

    useEffect(() => {
        api.get('/home').then(response => {
            setLogons(response.data)
        })
    }, [logons.data_hora])
    
    
    useEffect(()=> {
        if (!icon) {
            setTitleContainer("Tabela Analítica")
        } else {
            setTitleContainer("Gráfico de Usuários")
        }
    },[icon])

    const handleIcon = () => {
        setIcon(!icon)
    }

    const handleStatus = () => {
        setStatus(!status)
    }

    return (
        <>
            <Header />
            <HomeContainer>
                <button onClick={handleStatus}>Change</button>
                <div className='container-header'>
                    <h1>{titleContainer}
                        {
                            icon ? 
                            <BsTable className='table-icon' onClick={handleIcon}/>
                            : <BsFillBarChartFill className='table-icon' onClick={handleIcon}/>
                        }  
                    </h1>
                    <hr></hr>
                </div>
                {
                    icon ? <><BarChart status={status} /></>
                    : <TableChart />
                }
                {JSON.stringify(logons)}
            </HomeContainer>
        </>
    )
}