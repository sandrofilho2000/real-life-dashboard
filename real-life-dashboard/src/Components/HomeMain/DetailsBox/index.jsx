import React from 'react'
import ClientsBox from './ClientsBox'
import { DetailsBoxContainer } from './DetailsBox'
import OrderBox from './OrdersBox'

const DetailsBox = (props) => {

  return (
    <DetailsBoxContainer>
        <OrderBox orderItems={props['orderItems']} />
        <ClientsBox/>
    </DetailsBoxContainer>
  )
}

export default DetailsBox