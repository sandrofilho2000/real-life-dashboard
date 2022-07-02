import React, { useEffect, useState } from 'react'
import { ThemeDarkLightContainer, ThemeDLText, ThemeDLTextContainer, ThemeDLToggle, ThemeMenuContainer, ThemeMenuContainerTop, ThemeToggleBtn, ThemeToggleDark, ThemeToggleLight, ThemeTopClose, ThemeTopH4 } from './ThemeMenu'

import { useSelector, useDispatch } from 'react-redux'

import { theme_toggle, open_theme_menu } from '../../redux/actions/themeActions'

const ThemeMenu = () => {

  const theme_open = useSelector(state=>state['data_theme_open'])

  const dispatch = useDispatch()

  const [themeTgl, setThemeTgl] = useState()

  const setThemeToggle = (theme) =>{

    var new_theme = theme == 'theme-mode-dark' ? 'theme-mode-light' : 'theme-mode-dark'
    
    setThemeTgl(new_theme)
    
    localStorage.setItem("themeToggle", new_theme)

    dispatch(theme_toggle(new_theme))

  }

  const setThemeOpen = (theme_open) =>{
    dispatch(open_theme_menu(!theme_open))
  }

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
      <ThemeDarkLightContainer>
        <ThemeDLTextContainer>
            <ThemeDLText>
              Escolha o tema:
            </ThemeDLText>
        </ThemeDLTextContainer>
        <ThemeDLToggle onClick={()=>setThemeToggle(themeTgl)} >
          <ThemeToggleBtn>
          </ThemeToggleBtn>
          <ThemeToggleLight>
            <ion-icon name="sunny-outline"></ion-icon>
          </ThemeToggleLight>
          <ThemeToggleDark>
            <ion-icon name="moon-outline"></ion-icon>
          </ThemeToggleDark>
        </ThemeDLToggle>
      </ThemeDarkLightContainer>
    </ThemeMenuContainer>
  )
}

export default ThemeMenu