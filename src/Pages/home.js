import React, {useEffect, useState} from 'react'
import HomeMain from '../Components/HomeMain'
import OverlayLoad from '../Components/OverlayLoad'
import SideMenu from '../Components/SideMenu'
import { menuItems } from '../Components/SideMenu/Data'
import { CardBoxItems } from '../Components/HomeMain/CardBox/Data'
import ThemeMenu from '../Components/ThemeMenu'

const Home = () => {

  return (
    <>
      <OverlayLoad/>
      <SideMenu menuItems={menuItems} />
      <HomeMain cardBoxItems={CardBoxItems} />
      <ThemeMenu/>
    </>
  )
}

export default Home