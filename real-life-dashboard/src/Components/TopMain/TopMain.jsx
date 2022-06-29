import React from 'react'
import styled from "styled-components"
import { Link as LinkR } from 'react-router-dom'
import { darkMode } from '../../Pages/StylesScheme'



export const TopMainContainer = styled.div`
    width: 100%;
    height: 60px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 10px;

    *{
        color: ${darkMode['textColor']};
    }
`

export const TopMainToggle = styled.div`
    position: relative;
    top: 0;
    width: 60px;
    height: 60px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 2.5em;
    cursor: pointer;
`

export const TopMainSearch = styled.div`
    position: relative;
    display: flex;
`

export const TopMainSearchLabel = styled.label`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    ion-icon{
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        left: 10px;
        font-size: 1.2em;
    }
`

export const TopMainSearchLabelInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 40px;
    padding: 2px 20px;
    font-size: 18px;
    padding-left: 35px;
    line-height: 40px;
    background-color: ${darkMode['mainBg']};
    box-shadow: ${darkMode['boxShadow']};
    outline: none;
    border: 1px solid #fff;
`


export const TopMainUserContainer = styled(LinkR) `
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
`
export const TopMainUserContainerPic = styled.img `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`
