import styled from "styled-components"

export const CardContainer = styled.div `
    position: relative;
    padding: 30px;
    border-radius: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    cursor: pointer;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    background-color: var(--main-bg);
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
    
    &:hover{
        background-color: var(--main-color) !important;

        *{
            color: #fff !important;
        }
    }
`

export const CardTextContainer = styled.div`
    
`

export const CardTextNumbers = styled.p`
    position: relative;
    font-weight: 500;
    font-size: 2.5em;
`

export const CardTextName = styled.p`
    font-size: 1.1em;
    margin-top: 5px;
`

export const CardIconContainer = styled.div`
    *{
        font-size: 3.5em;
    }
`