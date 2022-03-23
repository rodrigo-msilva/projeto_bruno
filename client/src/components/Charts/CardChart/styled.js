import styled from "styled-components";
import { darkBlue, primaryGreen } from "../../../config/colors";

export const ContainerCards = styled.div`
    margin: 15px 14px;
    .card-item {
        border: 1px solid rgba(0,0,0,0.15);
        padding: 10px;
        width: 18%;
        display: flex;
        border-radius: 10px;
        font-family: 'Segoe UI', Tahoma,Verdana, sans-serif;

        .card-robot {
            font-size: 28px;
            margin-top: 9.3px;
            margin-left: 5px;
        }
        .line-item {
            font-weight: bold;
            font-size: 30px;
            float: left;
            color: ${primaryGreen}
        }
        .card-text {
            font-size: 17px;
            margin-top: 15px;
            margin-left: 14px;
        }
    }
`