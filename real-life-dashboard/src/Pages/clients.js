import React, { useEffect, useState } from 'react'
import ClientsMain from '../Components/ClientsMain'
import OverlayLoad from '../Components/OverlayLoad'
import SideMenu from '../Components/SideMenu'
import { menuItems } from '../Components/SideMenu/Data'

const Clients = () => {

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
      <ClientsMain menuToggle={menuToggle} handleMenuToggle={handleMenuToggle} />
    </>
  )
}

export default Clients