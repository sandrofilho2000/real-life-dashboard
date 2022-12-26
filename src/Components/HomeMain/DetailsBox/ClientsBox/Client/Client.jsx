import styled from "styled-components";

export const ClientContainer = styled.tr`
    display: flex;
    align-items: center;
    cursor: pointer;
    
    &:hover{
        background-color: var(--main-color);

        *{
            color: #ffffff !important;
        }
    }
`

export const ClientImgContainer = styled.td`
    width: 60px;
    height: 60px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ClientImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    -o-object-fit: cover;
    object-fit: cover;
`

export const ClientNameCountry = styled.td`
    padding: 12px 10px;
`

export const  ClientName = styled.h4`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2em;
`

export const  ClientCountry = styled.span`
    font-size: 14px;
    color: #999;
`