import React from 'react'
import TopMain from '../TopMain'
import { Main as HomeMainContainer } from '../Main'
import CardBox from './CardBox'
import GraphBox from './GraphBox'
import DetailsBox from './DetailsBox'
import { orderItems } from './DetailsBox/OrdersBox/Data'


const HomeMain = (props) => {

  const { menuToggle, handleMenuToggle, cardBoxItems } = props

  return (
    <HomeMainContainer className={menuToggle}>
        <TopMain handleMenuToggle={handleMenuToggle} />
        <CardBox cardBoxItems={cardBoxItems}/>
        <GraphBox/>
        <DetailsBox orderItems={orderItems} />
    </HomeMainContainer>
  )
}

export default HomeMain