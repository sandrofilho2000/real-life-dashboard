import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  
    SideMenuContainer,
    SideMenuUl,
    SideMenuLi,
    SideMenuA,
    SideMenuIcon,
    SideMenuTitle,
    SideMenuLogo
} from './SideMenu'

import logo from '../../Images/logo.jpg'

const SideMenu = ({menuItems}) => {

    const menu = useSelector(state=>state['data_menu'])

    const[menuTgl, setMenuTgl] = useState() 

    const handleMouseOverMenu = (e) =>{
        document.querySelectorAll("li.hovered").forEach((li)=>{
            li.classList.remove("hovered")
        })
        e.currentTarget.classList.add("hovered")
    }

    useEffect(()=>{
        /* SET MENU TOGGLE */ 
        const menu_toggle_ls = localStorage.getItem("menuToggle")
        if(menu_toggle_ls !== undefined) setMenuTgl(menu_toggle_ls)
        else setMenuTgl(menu) 
    })


    return (
        <SideMenuContainer className={menuTgl == 'true' ? 'active' : 'not_active'} >
            <SideMenuUl>
                <SideMenuLi>
                    <SideMenuA className='logo' to="/">
                        <SideMenuIcon>
                            <SideMenuIcon>
                                <SideMenuLogo src={logo} />
                            </SideMenuIcon>
                        </SideMenuIcon>
                        <SideMenuTitle>
                            REAL LIFE
                        </SideMenuTitle>
                    </SideMenuA>
                </SideMenuLi>

                {
                    menuItems.map(({active, title, icon_class, link}, index)=>{
           
                        if(active){
                            
                            return (
                                
                            <SideMenuLi onMouseOver={handleMouseOverMenu} key={index}>
                                <SideMenuA to={link}>
                                    <SideMenuIcon>
                                        <ion-icon name={icon_class}></ion-icon>
                                    </SideMenuIcon>
                                    <SideMenuTitle>
                                        {title}
                                    </SideMenuTitle>
                                </SideMenuA>
                            </SideMenuLi>
                            )
                        }
                    })
                } 


            </SideMenuUl>
        </SideMenuContainer>
    )
}

export default SideMenu