import React, { useState } from 'react'
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

const SideMenu = (props) => {
    
    const {menuItems, menuToggle} = props

    const handleMouseOverMenu = (e) =>{
        document.querySelectorAll("li.hovered").forEach((li)=>{
            li.classList.remove("hovered")
        })
        e.currentTarget.classList.add("hovered")
    }


    return (
        <SideMenuContainer className={menuToggle} menuToggle={menuToggle} >
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
                                
                            <SideMenuLi  onMouseOver={handleMouseOverMenu} key={index}>
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