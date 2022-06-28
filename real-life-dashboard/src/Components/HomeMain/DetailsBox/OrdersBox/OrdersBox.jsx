import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'

export const OrderBoxContainer = styled.div`
    position: relative;
    display: -ms-grid;
    display: grid;
    min-height: 500px;
    background: white;
    padding: 20px;
    -webkit-box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
`

export const OrderBoxTop = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
`

export const OrderBoxTopH2 = styled.h2`
    font-weight: 600;
    color: #20b042;
`



export const OrderBoxTopA = styled(LinkR)`
    position: relative;
    padding: 5px 10px;
    text-decoration: none;
    background: #20b042;
    border-radius: 6px;
    color: #fff;
`




export const OrderBoxTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
`



export const OrderBoxTableTr = styled.tr`
    &:last-child{
        border-bottom: none;
    }

    &:first-of-type{
        *{
            font-weight: 600;
        }
    }

    td{
        padding: 10px;
    }
`

export const OrderBoxTableTd = styled.td`
    color: #222;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    &:nth-child(3) {
        text-align: center;
    }

    &:last-of-type{
        text-align: end;
    }
`