import React from 'react'
import styled from "styled-components"
import { Link as LinkR } from 'react-router-dom'
import { darkLightMode } from '../../Pages/StylesScheme'


export const SideMenuContainer = styled.div`
  position: fixed;
  z-index: 3;
  width:  80px;
  height: 100%;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  overflow: hidden;
  background-color: var(--main-bg);
  box-shadow: var(--box-shadow);
  border-left: 10px solid var(--main-bg);
  
  *{
    color: var(--txt-color);
    ::-moz-selection { /* Code for Firefox */
      background: var(--main-color);
    }
  
    ::selection {
      background: var(--main-color);
    }
  }


  &.active{
    width: 300px;
  }

  @media (max-width: 991px){
    &{
      left: -300px;
    }
    &.active{
      width: 300px;
      left: 0;
    }
  }

  @media (max-width: 500px){
    &{
      width: 100vw;
      left: -100%;
      z-index: 1000;
    }
    &.active{
      left: 0;
      width: 100vw;
    }
  }


`


export const SideMenuUl = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`

export const SideMenuLi = styled.li`
    position: relative;
    width: 100%;
    list-style: none;

    &:hover, &.hovered{
      background-color: var(--main-color) !important;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;

      *{
        color: #ffffff !important;
      }

      a::before{
        content: '';
        position: absolute;
        right: 0;
        top: -50px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: transparent;
        -webkit-box-shadow: 35px 35px 0 10px var(--main-color);
        box-shadow: 35px 35px 0 10px var(--main-color);
        pointer-events: none;
        z-index: 999999;
      }

      a::after{
        content: '';
        position: absolute;
        right: 0;
        bottom: -50px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: transparent;
        -webkit-box-shadow: 35px -35px 0 10px var(--main-color);
        box-shadow: 35px -35px 0 10px var(--main-color);
        pointer-events: none;
      } 
    }
    
    &:first-of-type{
      margin-top: 10px;
      min-width: 260px;
      margin-bottom: 40px;
      pointer-events: none;
    }


`

export const SideMenuA = styled(LinkR)`
    position: relative;
    width: 100%;
    display: flex;

    &.logo{

      *{
        font-family: "Cormorant Garamond";
        color: #b0986c;
        font-size: 30px;
        letter-spacing: 0.1em;
      }


    }

    *{
      font-size: 1.75rem;
    }

    span{
      position: relative;
      display: flex;
      min-width: 60px;
      height: 60px;
      text-align: center;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: bold;
    } 
`

export const SideMenuIcon = styled.span`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;

`

export const SideMenuTitle = styled.span`
    position: relative;
    display: block;
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    text-align: start;
    white-space: nowrap;
`

export const SideMenuLogo = styled.img`
    height: 100%;
    width: 100%;
    min-width: 67px;
`