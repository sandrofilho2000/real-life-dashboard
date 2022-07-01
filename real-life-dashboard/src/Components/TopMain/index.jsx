import React, {useEffect, useState} from 'react'

import { 
    TopMainContainer,
    TopMainToggle,
    TopMainSearch,
    TopMainSearchLabel,
    TopMainSearchLabelInput,
    TopMainUserContainer,
    TopMainUserContainerPic 
} from './TopMain' 
import User from '../../Images/e.jpeg' 

import { useSelector, useDispatch } from 'react-redux'

import { menu_toggle } from '../../redux/actions/menuActions'


const TopMain = () => {
    const toggle = useSelector(state=>state)
    const dispatch = useDispatch()

    const[menuTgl, setMenuTgl] = useState()

    const setMenuToggle = (toggle) =>{
        var new_toggle = toggle == 'active' ? 'not_active' : 'active'
        setMenuTgl(new_toggle)
        localStorage.setItem("menuToggle", new_toggle)
        dispatch(menu_toggle(new_toggle))
    }

    useEffect(()=>{
        const menu_toggle_ls = localStorage.getItem("menuToggle")
        if(menu_toggle_ls !== undefined) setMenuTgl(menu_toggle_ls)
        else setMenuTgl(toggle['menuToggle']) 
    })

    return (
        <TopMainContainer>
            <TopMainToggle className='toggle'>
                <ion-icon onClick={()=>{setMenuToggle(menuTgl)}} name="menu-outline"></ion-icon>
            </TopMainToggle>
            <TopMainSearch>
                <TopMainSearchLabel>
                    <ion-icon name="search-outline"></ion-icon>
                    <TopMainSearchLabelInput placeholder='Search'/>
                </TopMainSearchLabel>
            </TopMainSearch>
            <TopMainUserContainer to="#" >
                <TopMainUserContainerPic src={User} />
            </TopMainUserContainer>
        </TopMainContainer>
    )
}

export default TopMain