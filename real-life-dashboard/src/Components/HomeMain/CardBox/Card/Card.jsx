import styled from "styled-components"
import { Link as LinkR } from 'react-router-dom'


export const CardContainer = styled.div `
    position: relative;
    background: white;
    padding: 30px;
    border-radius: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    cursor: pointer;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-shadow: 0 7px 25px rgba(0, 0, 0, 0.2);
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.2);
    
    &:hover{
        background: #20b042;

        *{
            color: #fff;
        }
    }
`

export const CardTextContainer = styled.div`
    
`

export const CardTextNumbers = styled.p`
    color: #20b042;
    position: relative;
    font-weight: 500;
    font-size: 2.5em;
`

export const CardTextName = styled.p`
    color: #999;
    font-size: 1.1em;
    margin-top: 5px;
`

export const CardIconContainer = styled.div`
    *{
        font-size: 3.5em;
        color: #999;
    }
`