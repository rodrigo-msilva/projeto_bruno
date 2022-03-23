import styled from "styled-components";

export const Nav = styled.nav`
    background: none;
    display: flex;
    padding: 13px 20px;
    margin: 0 20px;
    .container-left {
        width: 50%;
        font-size: 15.4px;
        
        .nav-icon {
            float: left;
            display: inline;
        }

        .user-icon {
            font-size: 17px;
            margin-right: 8px;
        }
    }

    .logo-cc {
            width: 100px;
        }

    .container-right {
        width: 50%;
        display: flex;
        justify-content: right;
        font-size: 16px;
        .nav-link {
            padding-right: 10px;
            margin: 5px;
        }
    }
    
    .sign-out-icon {
            font-size: 55px;
        }
    
`



