import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'

export const OrderBoxContainer = styled.div`
    position: relative;
    display: -ms-grid;
    display: grid;
    min-height: 500px;
    padding: 20px;
    border-radius: 20px;

    table{
        width: 100%;
        border-collapse: collapse;
        margin-top: 10px;

        tr, th{
            &:last-child{
                border-bottom: none;
            }

            &:first-of-type{
                *{
                    font-weight: 600;
                }
            }

            &:hover{
                background-color: var(--main-color) !important;

                *{
                    color: white !important;
                }
            }

            td{
                padding: 10px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    
                &:nth-child(3) {
                    text-align: center;
                }
    
                &:last-of-type{
                    text-align: end;
                }

                span{
                    color: white !important;
                    border-radius: 4px;
                    font-size: 14px;
                    font-weight: 500;
                    padding: 2px 4px;

                    &.delivered{
                        background: #8de02c;
                    }

                    &.pending{
                        background: #f9ca3f;
                    }

                    &.return{
                        background: #ff0000;
                    }

                    &.inprogress{
                        background: #1795ce;
                    }
                }
            }

        }
    }
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
`



export const OrderBoxTopA = styled(LinkR)`
    position: relative;
    padding: 5px 10px;
    text-decoration: none;
    background-color: var(--main-color) !important;
    border-radius: 6px;
    color: #ffffff !important;
`
