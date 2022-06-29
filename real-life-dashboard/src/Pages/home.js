import React, {useEffect, useState} from 'react'
import HomeMain from '../Components/HomeMain'
import OverlayLoad from '../Components/OverlayLoad'
import SideMenu from '../Components/SideMenu'
import { menuItems } from '../Components/SideMenu/Data'
import { CardBoxItems } from '../Components/HomeMain/CardBox/Data'

const Home = () => {

  const [menuToggle, setMenuToggle] = useState('not_active')

  useEffect(()=>{

    const menuStorage = localStorage.getItem('menuToggle')

    if(!menuStorage){
      localStorage.setItem('menuToggle', menuToggle)
    }else{
      setMenuToggle(menuStorage)
    }

  }, [])

  const handleMenuToggle = () =>{

    if(menuToggle === "active"){
      setMenuToggle("not_active")
      localStorage.setItem('menuToggle', 'not_active')
    }else if(menuToggle === "not_active"){
      setMenuToggle("active")
      localStorage.setItem('menuToggle', 'active')
    }


  }


  return (
    <>
      <OverlayLoad/>
      <SideMenu menuItems={menuItems} menuToggle={menuToggle} />
      <HomeMain menuToggle={menuToggle} cardBoxItems={CardBoxItems} handleMenuToggle={handleMenuToggle} />
    </>
  )
}

export default Home