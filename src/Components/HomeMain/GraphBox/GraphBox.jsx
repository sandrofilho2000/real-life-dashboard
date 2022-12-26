import styled from "styled-components"
import { darkLightMode } from '../../../Pages/StylesScheme'





export const GraphBoxContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 2fr;
    grid-template-columns: 1fr 2fr;
    grid-gap: 30px;
    min-height: 370px;
    
    & > div {
    
        background-color: var(--main-bg);
        box-shadow: var(--box-shadow);
        position: relative;
        padding: 20px;
        width: 100%;
        border-radius: 20px;
         
        *{
            margin: 0 auto;
        }

    }


    @media (max-width: 991px){
        & {
            -ms-grid-columns: 1fr;
            grid-template-columns: 1fr;
            height: auto;

            > div:last-of-type{
                min-height: 350px;
            }
        }
    }
`