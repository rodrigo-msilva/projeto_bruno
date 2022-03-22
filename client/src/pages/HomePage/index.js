import React, {useEffect, useState} from 'react';

import { FaFileCsv } from 'react-icons/fa'
import { BsFillBarChartFill,BsTable } from 'react-icons/bs'


import Header from "../../components/Header"
import BarChart from '../../components/Charts/BarChart';

import { HomeContainer } from './styled';
import CardChart from '../../components/Charts/CardChart';
import TableChart from '../../components/Charts/TableChart';


export default function HomePage() {
    const [icon, setIcon] = useState(true)
    const [titleContainer, setTitleContainer] = useState("Gráfico de Usuários")
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

    return (
        <>
            <Header />
            <HomeContainer>
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
                    icon ? <><CardChart /><BarChart /></>
                    : <TableChart />
                }
                
            </HomeContainer>
        </>
    )
}