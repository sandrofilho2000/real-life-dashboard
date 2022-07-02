import React, {useEffect, useState} from 'react'

import { 
    TopMainContainer,
    TopMainToggle,
    TopMainSearch,
    TopMainSearchLabel,
    TopMainSearchLabelInput,
    TopMainUserThemeContainer,
    TopMainUserContainerPic, 
    TopMainPicContainer
} from './TopMain' 
import User from '../../Images/e.jpeg' 

import { useSelector, useDispatch } from 'react-redux'
import { menu_toggle } from '../../redux/actions/menuActions'
import { open_theme_menu } from '../../redux/actions/themeActions'


const TopMain = () => {
    const dispatch = useDispatch()

    const menu = useSelector(state=>state['data_menu']) 

    const theme_open = useSelector(state=>state['data_theme_open']) 

    const currThemeMode = useSelector(state=>state['currTheme']) 

    const[themeNameTgl, setThemeNameTgl] = useState()

    const[menuTgl, setMenuTgl] = useState()


    const setMenuToggle = (menu) =>{

        setMenuTgl(!menu)

        localStorage.setItem("menuToggle", !menu)

        dispatch(menu_toggle(!menu))

    }

    const setThemeOpen = (theme_open) => {
        dispatch(open_theme_menu(!theme_open))
    }


    useEffect(()=>{
        const menu_toggle_ls = localStorage.getItem("menuToggle")
        if(menu_toggle_ls !== undefined) setMenuTgl(menu_toggle_ls)
        else setMenuTgl(menu) 

        /* SET THEME MODE */
        const theme_toggle_ls = localStorage.getItem("themeToggle")
        if(theme_toggle_ls !== undefined) setThemeNameTgl(theme_toggle_ls)
        else setThemeNameTgl(currThemeMode)
    })

    return (
        <TopMainContainer>
            <TopMainToggle className='toggle'>
                <ion-icon onClick={()=>{setMenuToggle(menu)}} name="menu-outline"></ion-icon>
            </TopMainToggle>
            <TopMainSearch>
                <TopMainSearchLabel>
                    <ion-icon name="search-outline"></ion-icon>
                    <TopMainSearchLabelInput placeholder='Search'/>
                </TopMainSearchLabel>
            </TopMainSearch>
            <TopMainUserThemeContainer>
                <TopMainPicContainer to="#">
                    <TopMainUserContainerPic src={User} />
                </TopMainPicContainer>
                <ion-icon onClick={()=>{setThemeOpen(theme_open)}} name="color-palette-outline"></ion-icon>
            </TopMainUserThemeContainer>
        </TopMainContainer>
    )
}

export default TopMain