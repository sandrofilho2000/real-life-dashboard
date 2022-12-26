import React, {useState, useEffect} from 'react'
import TopMain from '../TopMain'
import { Main as HomeMainContainer } from '../Main'
import CardBox from './CardBox'
import GraphBox from './GraphBox'
import DetailsBox from './DetailsBox'
import { HomeData } from './HomeData'
import { useSelector } from 'react-redux'

const HomeMain = ({ cardBoxItems }) => {

  const data = useSelector(state=>state)
  const menu = useSelector(state=>state['data_menu'])

  const currThemeMode = data['currTheme']

  const[themeNameTgl, setThemeNameTgl] = useState()
  const[menuTgl, setMenuTgl] = useState()

  useEffect(()=>{
    
      const menu_toggle_ls = localStorage.getItem("menuToggle")
      if(menu_toggle_ls !== undefined) setMenuTgl(menu_toggle_ls)
      else setMenuTgl(menu) 

      /* SET THEME MODE */
      const theme_toggle_ls = localStorage.getItem("themeToggle")
      if(theme_toggle_ls !== undefined) setThemeNameTgl(theme_toggle_ls)
      else setThemeNameTgl(currThemeMode)

  })

  const { orderItems, orderClients } = HomeData

  return (
    <HomeMainContainer className={menuTgl == 'true' ? 'active' : 'not_active'}>
        <TopMain />
        <CardBox cardBoxItems={cardBoxItems}/>
        <GraphBox />
        <DetailsBox orderItems={orderItems} orderClients={orderClients} />
    </HomeMainContainer>
  )
}



export default HomeMain