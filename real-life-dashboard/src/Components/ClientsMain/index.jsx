import React, { useState } from 'react'
import TopMain from '../TopMain'
import { Main as ClientsMainContainer } from '../Main'

const ClientsMain = (props) => {

  const { menuToggle, handleMenuToggle } = props

  return (
    <ClientsMainContainer className={menuToggle}>
        <TopMain handleMenuToggle={handleMenuToggle} />
        <h1>Clients</h1>
    </ClientsMainContainer>
  )
}

export default ClientsMain