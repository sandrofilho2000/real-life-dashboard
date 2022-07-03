import styled from "styled-components"
import { Link as LinkR } from 'react-router-dom'
import {darkLightMode} from '../Pages/StylesScheme'

export const Main = styled.div`
    position: absolute;
    min-width: calc(100vw - 80px);
    left: 80px;
    min-height: 100vh;
    -webkit-transition: .3s;
    transition: .3s;
    min-height: 100vh ;
    height: 100%;
    overflow: auto;
    background-color: var(--second-bg);
    
    *{
        color: var(--txt-color);
    }


    &.active{
        left: 300px;
        min-width: calc(100vw - 300px);
    }

    @media (max-width: 991px){
        &{
            width: 100vw;
            left: 0;
        }
        &.active{
            left:  300px;
        }
    }

    @media (max-width: 500px){

        &.active .toggle *{
            position: fixed;
            right: 0;
            top: 10px;
            left: initial;
            z-index: 10001;
        }
    }
`