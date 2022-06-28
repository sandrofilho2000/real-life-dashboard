import React from 'react'
import TopMain from '../TopMain'
import { Main as HomeMainContainer } from '../Main'
import CardBox from './CardBox'
import GraphBox from './GraphBox'
import DetailsBox from './DetailsBox'
import { HomeData } from './HomeData'


const HomeMain = (props) => {

  const { orderItems, orderClients } = HomeData
  const { menuToggle, handleMenuToggle, cardBoxItems } = props

  return (
    <HomeMainContainer className={menuToggle}>
        <TopMain handleMenuToggle={handleMenuToggle} />
        <CardBox cardBoxItems={cardBoxItems}/>
        <GraphBox/>
        <DetailsBox orderItems={orderItems} orderClients={orderClients} />
    </HomeMainContainer>
  )
}

export default HomeMain