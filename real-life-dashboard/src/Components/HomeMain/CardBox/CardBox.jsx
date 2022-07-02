import styled from "styled-components"

export const CardBoxContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    display: -ms-grid;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 991px){
        & {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (max-width: 500px){
        & {
            grid-template-columns: repeat(1, 1fr);
        }
    }



`

