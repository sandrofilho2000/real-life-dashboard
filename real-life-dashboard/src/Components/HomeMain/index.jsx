import React, {useState, useEffect} from 'react'
import TopMain from '../TopMain'
import { Main as HomeMainContainer } from '../Main'
import CardBox from './CardBox'
import GraphBox from './GraphBox'
import DetailsBox from './DetailsBox'
import { HomeData } from './HomeData'
import { useSelector, useDispatch } from 'react-redux'

const HomeMain = ({ cardBoxItems }) => {

  const toggle = useSelector(state=>state)
  const[menuTgl, setMenuTgl] = useState()

  useEffect(()=>{
      const menu_toggle_ls = localStorage.getItem("menuToggle")
      if(menu_toggle_ls !== undefined) setMenuTgl(menu_toggle_ls)
      else setMenuTgl(toggle['menuToggle']) 
  })

  const { orderItems, orderClients } = HomeData
  
  return (
    <HomeMainContainer className={menuTgl}>
        <TopMain />
        <CardBox cardBoxItems={cardBoxItems}/>
        <GraphBox/>
        <DetailsBox orderItems={orderItems} orderClients={orderClients} />
    </HomeMainContainer>
  )
}



export default HomeMain