import React from 'react'
import styled from "styled-components"
import { Link as LinkR } from 'react-router-dom'
import { darkLightMode } from '../../Pages/StylesScheme'



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
    border-radius: var(--border-radius);
    color: var(--txt-color);
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
    outline: none;
    border: 1px solid var(--txt-color);
    box-shadow: var(--box-shadow);
    background-color: transparent;

`


export const TopMainUserThemeContainer = styled.div `
    position: relative;
    width: 90px;
    height: 40px;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ion-icon{
        display: block;
        font-size: 46px;
        position: absolute;
        right: 0;
    }
    `

export const TopMainPicContainer = styled(LinkR)`
`
export const TopMainUserContainerPic = styled.img `
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    -o-object-fit: cover;
    object-fit: cover;
`
