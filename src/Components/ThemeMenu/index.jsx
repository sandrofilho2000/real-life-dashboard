import React, { useEffect, useState } from 'react'
import { ColorListLi, ColorListLiView, ColorListUl, ColorMenuContainerTop, ColorText, ColorTextContainer, ColorTopH4, ThemeDLContainer, ThemeDLText, ThemeDLTextContainer, ThemeDLToggle, ThemeMenuContainer, ThemeMenuContainerTop, ThemeToggleBtn, ThemeToggleDark, ThemeToggleLight, ThemeTopClose, ThemeTopH4 } from './ThemeMenu'

import { useSelector, useDispatch } from 'react-redux'

import { theme_toggle, open_theme_menu, color_toggle } from '../../redux/actions/themeActions'

const ThemeMenu = () => {

  const theme_open = useSelector(state=>state.data_theme_open) 

  const theme = localStorage.getItem("themeToggle")

  const color = useSelector(state=>state.currColor)

  const dispatch = useDispatch()


  const [colorTgl, setColorTgl] = useState()

  const setThemeToggle = (theme) =>{

    var new_theme = theme == 'theme-mode-dark' || theme == undefined ? 'theme-mode-light' : 'theme-mode-dark'
    
    localStorage.setItem("themeToggle", new_theme)

    dispatch(theme_toggle(new_theme))

  }

  const setThemeOpen = (theme_open) =>{
    dispatch(open_theme_menu(!theme_open))
  }

  const setColorToggle = (color) =>{
    dispatch(color_toggle(color))
    localStorage.setItem("currColorLs", color)
  }

  useEffect(()=>{
    var colorLs = localStorage.getItem("currColorLs")
    if(colorLs){setColorTgl(colorLs)}
    else{setColorTgl(color)}
  })
 
  return (
    <ThemeMenuContainer className={theme_open ? 'active' : 'not_active'}>
      <ThemeMenuContainerTop>
        <ThemeTopH4>
          TEMA
        </ThemeTopH4>
        <ThemeTopClose onClick={()=>setThemeOpen(theme_open)}>
          +
        </ThemeTopClose>
      </ThemeMenuContainerTop>
      <ThemeDLContainer>
        <ThemeDLTextContainer>
            <ThemeDLText>
              Escolha o tema:
            </ThemeDLText>
        </ThemeDLTextContainer>
        <ThemeDLToggle onClick={()=>setThemeToggle(theme)} >
          <ThemeToggleBtn>
          </ThemeToggleBtn>
          <ThemeToggleLight>
            <ion-icon name="sunny-outline"></ion-icon>
          </ThemeToggleLight>
          <ThemeToggleDark>
            <ion-icon name="moon-outline"></ion-icon>
          </ThemeToggleDark>
        </ThemeDLToggle>
      </ThemeDLContainer>
      <ColorMenuContainerTop>
        <ColorTextContainer>
          <ColorText>
            Cores
          </ColorText>
        </ColorTextContainer>
        <ColorListUl className={colorTgl}>
          <ColorListLi onClick={()=>setColorToggle("cyan")}>
            <ColorListLiView className='cyan'/>
            Cyan
          </ColorListLi>
          <ColorListLi onClick={()=>setColorToggle("red")}>
            <ColorListLiView className='red'/>
            Red
          </ColorListLi>
          <ColorListLi onClick={()=>setColorToggle("orange")}>
            <ColorListLiView className='orange'/>
            Orange
          </ColorListLi>
          <ColorListLi onClick={()=>setColorToggle("blue")}>
            <ColorListLiView className='blue'/>
            Blue
          </ColorListLi>
          <ColorListLi onClick={()=>setColorToggle("green")}>
            <ColorListLiView className='green'/>
            Green
          </ColorListLi>
        </ColorListUl>
      </ColorMenuContainerTop>
    </ThemeMenuContainer>
  )
}

export default ThemeMenu