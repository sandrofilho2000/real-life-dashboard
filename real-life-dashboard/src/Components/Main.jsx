import styled from "styled-components"
import { Link as LinkR } from 'react-router-dom'

export const Main = styled.div`
    position: absolute;
    min-width: calc(100vw - 80px);
    left: 80px;
    min-height: 100vh;
    background: #fff;
    -webkit-transition: .5s;
    transition: .5s;
    min-height: 100vh ;
    height: 100%;
    overflow: auto;
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
            color: #fff;
            z-index: 10001;
        }
    }
`