import React, { useState, useEffect } from 'react'
import OverlayLoad from '../Components/OverlayLoad'
import ProductsMain from '../Components/ProductsMain'
import SideMenu from '../Components/SideMenu'
import { menuItems } from '../Components/SideMenu/Data'
import ThemeMenu from '../Components/ThemeMenu'

const Products = () => {

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
      <ProductsMain menuToggle={menuToggle} handleMenuToggle={handleMenuToggle} />
      <ThemeMenu/>
    </>
  )
}

export default Products