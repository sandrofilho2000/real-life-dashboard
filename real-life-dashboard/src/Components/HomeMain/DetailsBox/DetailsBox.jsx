import styled from "styled-components";
import { darkMode } from "../../../Pages/StylesScheme";
export const DetailsBoxContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 2fr 2fr;
    grid-template-columns: 2fr 2fr;
    grid-gap: 30px;
    margin-top: 10px;

    > div{
        background-color: ${darkMode['mainBg']};

        *{
            color: ${darkMode['textColor']};
        }

        a{
            color: #fff;
        }

    }

    @media (max-width: 768px){
        & {
            -ms-grid-columns: 1fr;
            grid-template-columns: 1fr;
            height: auto;
        }
    }
`