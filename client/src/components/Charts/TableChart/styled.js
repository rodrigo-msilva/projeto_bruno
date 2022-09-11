import styled from "styled-components";

export const TableContainer = styled.div`
    margin: 20px;
    width: 100%;
    
    
    table {
    border-collapse: collapse;
    width: 97%;
    display: block;
    text-align: center;
    height: 430px;
    overflow-y: scroll;
    
  }

th, td {
  padding: 6px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 10px;
}

tr:hover {background-color: coral;}

`