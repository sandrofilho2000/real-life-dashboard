import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categories_update, category_active } from '../../../../redux/actions/categoryActions'
import { ProductsCategories, ProductsContainer, ProductsList } from './Products'
import { product_add, product_edit } from '../../../../redux/actions/productActions'

const Products = () => {
    const [categoryActive, setcategoryActive] = useState(useSelector(state => state.categoryActive))
    const productsNcategory = useSelector(state => state.productsNcategory)
    const categories = productsNcategory.categories

    const dispatch = useDispatch()

    const update_category_array = (array) => {
        dispatch(categories_update(array))
    }

    const set_product_adding = (product) =>{
        dispatch(product_add(product))
    }

    const set_product_editing = (product) =>{
        dispatch(product_edit(product))
    }

    const dragItem = useRef(null)
    const dragOverItem = useRef(null)

    const handleDelete = (productId, categoryId, productName) => {
        if(window.confirm(`Deseja realmente excluir esse produto? (${productName})`)){
            let category = categories.filter((category, index) => {
                return category.id === categoryId
            })
    
            let categoryIndex = null
            categories.filter((category, index) => {
                if(category.id === categoryId){
                    categoryIndex = index
                }
            })
    
            let products = category[0].products.filter((product, index) => {
                return product.id !== productId
            })
    
    
            category.products = products
            productsNcategory.categories[categoryIndex].products = products
            update_category_array(productsNcategory)
        }
    }

    let handleSort = (categoryId) => {

        let category = categories.filter((category, index) => {
            return category.id === categoryId
        })

        let categoryIndex = null
        categories.filter((category, index) => {
            if(category.id === categoryId){
                categoryIndex = index
            }
        })

        let products = category[0].products

        const draggedItemContent = products.splice(dragItem.current, 1)[0]
        products.splice(dragOverItem.current, 0, draggedItemContent)

        category.products = products
        productsNcategory[categoryIndex] = category
        update_category_array(productsNcategory)

        dragItem.current = null
        dragOverItem.current = null
    }

    let handleCategoryActive = (active) => {
        setcategoryActive(active)
        dispatch(category_active(active))
    }

    let handleProductPause = (e) => {
        var li = e.target.closest('li')
        e.target.closest('.productPause').classList.toggle("play")
        li.classList.add("paused")
        if (e.target.closest('.productPause').classList.contains("play")) {
            li.setAttribute("draggable", "false")
        } else {
            li.classList.remove("paused")
            li.setAttribute("draggable", "true")
        }
    }

    let handleOverlayEditOpen = ({category, product}) => {
        document.querySelector(".editProductContainer").classList.add("active")
        var _currProductEditing = {
            category: {...category},
            product: {...product}
        }
        set_product_editing(_currProductEditing)
    }

    let handleOverlayAddOpen = (category, index) => {
        document.querySelector(".addProductContainer").classList.add("active")
        var _currProductAdding = {
            categoryId: category.id,
            categoryImg: category.img,
            index: index,
            fixedSizes: category.fixedSizes,
            product: {
                _sideDishes: [],
                sizes: [],
                sideDishes: category.sideDishes,
                ingredients: category.fixedIngredients
            }
        }
        set_product_adding(_currProductAdding)

    }


    return (
        <ProductsContainer>

            <ProductsCategories className='productsCategories'>
                <ul>
                    {
                        categories.map((category, index) => (
                            <li onClick={() => { handleCategoryActive(category.slug) }} key={index} category={category.slug} className={categoryActive === category.slug ? 'active' : ''}>
                                <img src={category.img} title="Batata Frita" />
                            </li>
                        ))
                    }
                </ul>
            </ProductsCategories>

            <ProductsList className='productsList'>
                {
                    categories.map((category, index) => {

                        const products = category.products

                        return (
                            <div key={index} className={categoryActive === category.slug ? 'ulContainer active' : 'ulContainer'}>
                                <div className="productsContainerTop">
                                    <h3>
                                        {category.name}
                                    </h3>
                                    <div onClick={()=>{handleOverlayAddOpen(category, index)}} className="productAdd">
                                        +
                                    </div>
                                </div>
                                <ul category={category.slug} className='productList'>

                                    {
                                        products.map((product, index) => {
                                            return (
                                                <li
                                                    draggable
                                                    onDragEnd={() => { handleSort(category.id) }}
                                                    onDragStart={(e) => (dragItem.current = index)}
                                                    onDragEnter={(e) => (dragOverItem.current = index)}
                                                    id={product.id}
                                                    key={index}
                                                >
                                                    <div className="productSettings">
                                                        <div className="productPause" onClick={(e) => { handleProductPause(e) }}>
                                                            <ion-icon name="pause"></ion-icon>
                                                            <ion-icon name="play"></ion-icon>
                                                        </div>

                                                        <div onClick={() => { handleDelete(product.id, product.categoryId, product.name) }} className="productDelete">
                                                            <ion-icon name="trash"></ion-icon>
                                                        </div>
                                                    </div>
                                                    <div className="productImage">
                                                        <img src={product.img} />
                                                    </div>
                                                    <span className="productName">
                                                        {product.name}
                                                    </span>
                                                    <div className="productOrder">
                                                        <ion-icon name="menu"></ion-icon>
                                                    </div>
                                                    <div onClick={()=>{handleOverlayEditOpen({category, product})}} className="productEdit">
                                                        <ion-icon name="create"></ion-icon>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }


            </ProductsList>

        </ProductsContainer>
    )
}

export default Products