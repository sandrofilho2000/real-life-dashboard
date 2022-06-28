import React, { useState } from 'react'
import TopMain from '../TopMain'
import { Main as ProductsMainContainer } from '../Main'


const ProductsMain = (props) => {

  const { menuToggle, handleMenuToggle } = props

  return (
    <ProductsMainContainer className={menuToggle}>
        <TopMain handleMenuToggle={handleMenuToggle} />
        <h1>Products</h1>
    </ProductsMainContainer>
  )
}

export default ProductsMain