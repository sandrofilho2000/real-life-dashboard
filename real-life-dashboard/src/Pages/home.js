import React, {useEffect, useState} from 'react'
import HomeMain from '../Components/HomeMain'
import OverlayLoad from '../Components/OverlayLoad'
import SideMenu from '../Components/SideMenu'
import { menuItems } from '../Components/SideMenu/Data'
import { CardBoxItems } from '../Components/HomeMain/CardBox/Data'

const Home = () => {

  return (
    <>
      <OverlayLoad/>
      <SideMenu menuItems={menuItems} />
      <HomeMain cardBoxItems={CardBoxItems} />
    </>
  )
}

export default Home