import styled from 'styled-components'
import { primaryGreen } from '../../config/colors'

export const HomeContainer = styled.div`
    margin: 0 40px;
    box-shadow: 0 1px 10px 0 rgb(0 0 0 / 20%), 0 2px 15px 0 rgb(0 0 0 / 10%);
    height: 100%;
    border-radius: 10px;
    background-color: white;
    
    .container-header {
        h1 {
        font-family: 'Fredoka', sans-serif;
        padding: 16px 22px;
        font-size: 30px;
        .table-icon {
            width: 40px;
            height: 23px;
            float: right;
            margin: 5px 2px 0 0;
            cursor: pointer;
            border-radius: 5px;
            padding: 1px;
            :hover {
                border: 0.1px groove rgba(0,0,0,0.15)
            }
        }
    }
        hr {
            color: ${primaryGreen};
            margin: 0px 20px;
        }

       .period-icon {
           margin: 4px;
       }
            
    }
    
    
`