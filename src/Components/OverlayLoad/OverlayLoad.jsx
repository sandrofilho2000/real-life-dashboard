import styled from "styled-components"

export const OverlayLoadContainer =  styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: black;
    z-index: 99999999;
    top: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    transition: 1s;

    &.loaded{
        z-index: -9999;
        opacity: 0;
    }
`

export const OverlayLoadLogo = styled.img`
    width: 70%;
    max-width: 450px;
    opacity: .9;
    -webkit-animation: opacidade 3s infinite;
    animation: opacidade 3s infinite;
`