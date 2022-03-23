import React from "react";
import { FaRobot } from 'react-icons/fa'
import { ContainerCards } from "./styled";


export default function CardChart() {
    return (
        <ContainerCards>
            
            <div className="card-item ">
            <div className="line-item">|</div>
            <FaRobot className="card-content card-robot"/>
            <h2 className="card-content card-text">1219 Logons</h2>
            </div>
        </ContainerCards>
    )
}