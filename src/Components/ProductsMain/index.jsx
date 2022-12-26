import React, { useEffect, useState } from 'react'
import TopMain from '../TopMain'
import { Main as ProductsMainContainer } from '../Main'
import { useSelector } from 'react-redux'
import CategoryBox from './CategoryBox'
import ProductsCategories from './ProductsCategories'
import { useDispatch } from 'react-redux'
import { category_edit } from '../../redux/actions/categoryActions'
import AddCategory from './AddCategory'
import AddProduct from './AddProduct'
import EditCategory from './EditCategory'
import EditProduct from './EditProduct'
import AddSideDish from './AddSideDish'
import EditSideDish from './EditSideDish'

const ProductsMain = (props) => {
  
  const data = useSelector(state=>state)
  const menu = useSelector(state=>state['data_menu'])

  const[themeNameTgl, setThemeNameTgl] = useState()
  const[menuTgl, setMenuTgl] = useState()
  const currThemeMode = data['currTheme']


  useEffect(()=>{
    
      const menu_toggle_ls = localStorage.getItem("menuToggle")
      if(menu_toggle_ls !== undefined) setMenuTgl(menu_toggle_ls)
      else setMenuTgl(menu)

      /* SET THEME MODE */
      const theme_toggle_ls = localStorage.getItem("themeToggle")
      if(theme_toggle_ls !== undefined) setThemeNameTgl(theme_toggle_ls)
      else setThemeNameTgl(currThemeMode)

  })

  const { menuToggle, handleMenuToggle } = props

  return (
    <ProductsMainContainer className={menuTgl == 'true' ? 'active' : 'not_active'}>
        <AddCategory/>
        <EditCategory/>
        <AddProduct/>
        <EditProduct/>
        <AddSideDish/>
        <EditSideDish/>
        <TopMain handleMenuToggle={handleMenuToggle} />
        <CategoryBox/>
        <ProductsCategories/>
    </ProductsMainContainer>
  )
}

export default ProductsMain