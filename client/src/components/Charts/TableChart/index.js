import React, {useState,useEffect} from "react";
import api from "../../../services/api";
import { TableContainer } from "./styled";
import { CSVLink } from 'react-csv'
export default function TableChart() {
    const [logons,setLogons] = useState([])
    
    useEffect(()=> {
        api.get('/home/find/all').then(response => {
            setLogons(response.data)
            
        })
    },[])

    return (
        <>
        
        <TableContainer>
        
            <table>
                <thead>
                    <tr>
                    <th>Usuário</th>
                    <th>Data</th>
                    <th>Hora</th>
                    <th>Razão Social</th>
                    <th>Cidade</th>
                    <th>UF</th>
                    <th>Margem Consignado</th>
                    <th>Margem Cartão</th>
                    <th>Locação</th>
                    <th>Cargo</th>
                    <th>Data Nomeação/Admissão</th>
                    <th>Tipo Vínculo</th>
                    <th>Data Fim Contrato</th>
                    <th>CPF</th>
                    <th>NATJUR</th>
                    <th>DDD</th>
                    <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        logons.map((user,index) => {
                            return(
                            <tr key={index}>
                                <td>{user.USUARIO}</td>
                                <td>{new Date(user.DT_TRATAMENTO).toLocaleDateString()}</td>
                                <td>{new Date(user.DT_TRATAMENTO).toLocaleTimeString()}</td>
                                <td>{user['RAZAO SOCIAL']}</td>
                                <td>{user.CIDADE}</td>
                                <td>{user.UF}</td>
                                <td>{user['MARGEM CONSIGNADO']}</td>
                                <td>{user['MARGEM CARTAO']}</td>
                                <td>{user.LOCACAO}</td>
                                <td>{user.CARGO}</td>
                                <td>{user.DT_NOMEASSAO_ADMISSAO}</td>
                                <td>{user.TIPO_VINCULO}</td>
                                <td>{user.DT_FIM_CONTRATO}</td>
                                <td>{user.CPF}</td>
                                <td>{user.TP_NATJUR}</td>
                                <td>{user.DDD}</td>
                                <td>{user.FONE}</td>
                            </tr>)
                        })
                    } 
                </tbody>
            </table>
            <CSVLink style={{
                
            }}data={logons} target="__blank">Baixar arquivo .csv</CSVLink>
        </TableContainer>
        
        </>
    )
}

