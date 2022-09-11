import styled from "styled-components";
import { lightGreen, primaryGreen, secondGreen } from '../../config/colors'


export const LoginContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: white;
    height: 350px;
    width: 380px;
    border-radius: 14px;
    box-shadow: 0 1px 10px 0 rgb(0 0 0 / 10%), 0 2px 15px 0 rgb(0 0 0 / 5%);
    display: inline-block;
    
    img{
        margin-left: 134px;
        margin-top: -46px;
        margin-bottom: -10px;
        height: 100px;
    }

`

export const Form = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    input {
        margin-bottom: 20px;
        height: 40px;
        padding: 0 10px;
        border-radius: 4px;
        border: 1px solid #ddd;
    }

    button {
    background: linear-gradient(to bottom right, ${primaryGreen}, ${lightGreen});
    border: 0;
    border-radius: 10px;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 2.5;
    outline: transparent;
    padding: 0 1rem;
    text-align: center;
    text-decoration: none;
    transition: box-shadow .2s ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    }

    button:not([disabled]):focus {
    box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem ${secondGreen}, .125rem .125rem 1rem ${secondGreen};
    }

    button:not([disabled]):hover {
    box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 0.5rem ${secondGreen}, .125rem .125rem 0.5rem ${secondGreen};
    }

`