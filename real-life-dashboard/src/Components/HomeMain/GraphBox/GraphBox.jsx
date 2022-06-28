import styled from "styled-components"

export const GraphBoxContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 2fr;
    grid-template-columns: 1fr 2fr;
    grid-gap: 30px;
    min-height: 200px;

    & > div {
        position: relative;
        padding: 20px;
        width: 100%;
        background: #fff;
        border-radius: 20px;
        -webkit-box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
        box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    }

    @media (max-width: 991px){
        & {
            -ms-grid-columns: 1fr;
            grid-template-columns: 1fr;
            height: auto;
        }
    }
`