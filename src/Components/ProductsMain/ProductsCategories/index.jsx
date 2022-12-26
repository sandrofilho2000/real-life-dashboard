import React from 'react'
import { ProductsCategoriesContainer } from './ProductsCategories'
import Products from './Products'
import SideDishes from './SideDishes'

const ProductsCategories = () => {



    return (
        <ProductsCategoriesContainer>
            <SideDishes/>
            <Products/>
        </ProductsCategoriesContainer>
    )
}

export default ProductsCategories

