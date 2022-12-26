import React, { createRef, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EditProductContainer } from './EditProduct'
import { product_edit } from '../../../redux/actions/productActions'
import { categories_update } from '../../../redux/actions/categoryActions'

const EditProduct = () => {

    let[containerLeft, setContainerLeft] = useState(0)
    const dispatch = useDispatch()

    const set_product_editing = (product) =>{
        dispatch(product_edit(product))
    }

    const update_categories = (array) =>{
        dispatch(categories_update(array))
    }

    const currProductEditing = useSelector(state => state.currProductEditing)
    const categories = useSelector(state => state.productsNcategory)
    const sdCategories = useSelector(state => state.sideDishes)

    const product = currProductEditing.product
    const category = currProductEditing.category

    const overlay = useRef(null)
    const form = useRef(null)
    const prodImg = useRef(null)
    const prodName = useRef(null)
    const prodIngredient = useRef(null)
    const prodPrices = useRef([]);
    const sideDishAdd = useRef(null)

    prodPrices.current = currProductEditing.product.sizes.map((_, i) => prodPrices.current[i] ?? createRef());

    let handleOverlayClose = (e) => {
        overlay.current.classList.remove("active")
    }

    let handleProductName = () =>{
        product.name = prodName.current.value
    }
    
    let handleProductImg = () =>{
        let file = URL.createObjectURL(form.current.prodPic.files[0]);
        prodImg.current.src = file
        currProductEditing.product.img = file
        set_product_editing(currProductEditing)
    }

    let handleProductIngredients = () =>{
        if(prodIngredient.current.value != ''){
            if(!product.ingredients.includes(prodIngredient.current.value)){
                product.ingredients.push(prodIngredient.current.value)
                set_product_editing(currProductEditing)
            }else{
                alert("Ingrediente já adicionado!")
            }  
        }else{
            alert("Insira um ingrediente válido!")
        }
        prodIngredient.current.value = ''
    }

    let handleProdIngredientDelete = (e) =>{
        let ingredient = e.currentTarget.parentElement.querySelector(".componentName").innerHTML.trim()
        let ingredients = product.ingredients.filter((item)=>{
            return item !== ingredient
        })
        product.ingredients = ingredients
        set_product_editing(currProductEditing)
    }

    let handleProductPrices = () =>{
        let sizePrices = []
        prodPrices.current.forEach((price)=>{
            let sizePriceSingle = {}
            sizePriceSingle.price = price.current.value
            sizePriceSingle.size = price.current.closest(".sizeSingle").querySelector(".sizeName").innerHTML
            sizePrices.push(sizePriceSingle)
        })
        product.sizes = sizePrices
        set_product_editing(currProductEditing)
    }

    let handleProductSideDishesCatAdd = () =>{

        let sdCat = sideDishAdd.current.value
        let sdCategory = sdCategories.categories.filter((item)=>{
            return item.name === sdCat
        })

        sdCategory[0].qtnMin = 0
        sdCategory[0].qtnMax = 10

        if(!product.sideDishesCat.includes(sdCategory[0])){
            product.sideDishesCat.push(sdCategory[0])
            set_product_editing(currProductEditing)
        }
    }

    let handleProductSideDishesCatDelete = (e, id) =>{
        let newSdCatArray = product.sideDishesCat.filter((item)=>{
            return item.id !== id
        })

        product.sideDishesCat = newSdCatArray
        set_product_editing(currProductEditing)
    }

    let handleProductSideDishRemove = (sdName, index, sdCatName) =>{

        let sdCatArray = product.sideDishesCat[index]
        
        let sdArray = sdCatArray.sideDishes.filter((item)=>{
            return item.name !== sdName
        })

        sdCatArray.sideDishes = sdArray

        product.sideDishesCat[index] = sdCatArray

        set_product_editing(currProductEditing)

    }

    let handleProductSubmit = () =>{

        let category = categories.categories.filter((item, index)=>{
            return item.id === product.categoryId
        })

        category[0].products.forEach((item, index)=>{
            if(item.id === product.id){
                category[0].products[index] = product
            }
        })

        categories.categories.forEach((item, index)=>{
            if(item.id === category.id){
                categories.categories[index] = category[0]
            }
        })

        handleOverlayClose()
        update_categories(categories)
        setContainerLeft(0)
    }
    
    let handleContainerLeft = (direction) =>{

        if(containerLeft == 1){
        }

        if(direction == 'backwards'){
            if(containerLeft > 0){
                setContainerLeft(containerLeft-=1)
            }
        }

        if(direction == 'forwards'){
            if(containerLeft < 2){
                if(containerLeft == 0){
                    if(prodName.current.value !== ''){
                        handleProductName()
                        setContainerLeft(containerLeft+=1)
                    }else{
                        alert("Insira um nome válido")
                    }
                }else if(containerLeft == 1){
                    let prodPricesValid = []

                    prodPrices.current.forEach((price)=>{
                        if(price.current.value != ''){
                            prodPricesValid.push(price.current.value)
                        }
                    })

                    if(prodPricesValid.length !== 0){
                        handleProductPrices()
                        setContainerLeft(containerLeft+=1)
                    }else{
                        alert("Insira ao menos um preço válido. Caso não haja, pause o produto!")
                    }
                }
            }

        }
    }


    return (
        <EditProductContainer ref={overlay} className='editProductContainer'>
            <div className="editProductWrapper">
                <div className="prodWrapperTop">
                    <div onClick={()=>{handleOverlayClose()}} className="closeProd">
                        +
                    </div>
                </div>
                <div className="arrowsMove">
                    {
                        containerLeft != 0 && 
                            <ion-icon onClick={()=>handleContainerLeft('backwards')} name="caret-back-outline"></ion-icon>
                        
                    }
                    {
                        containerLeft != 2 && 
                            <ion-icon onClick={()=>handleContainerLeft('forwards')} name="caret-forward-outline"></ion-icon>
                    }
                </div>
                <div style={{marginLeft: (-470 * containerLeft) + 'px'}} className="formsContainer">
                    <form ref={form}>
                        <div className="prodTop">
                            <div className="prodPic">
                                <label>
                                    <input onChange={()=>{handleProductImg()}} name="prodPic" type="file"/>
                                    <img ref={prodImg} src={product.img} />
                                    <img src={category.img}/>
                                </label>
                            </div>
                        </div>
                        <div className="prodBottom">
                            <div className="prodName">
                                <input ref={prodName} type="text" defaultValue={product.name} placeholder='Nome do produto' />
                            </div>
                        </div>
                    </form>

                    <form>
                        <div className="prodTop">
                            <div className="nameEdit">
                                <input onKeyUp={(e)=>{if(e.key === 'Enter'){handleProductIngredients()}}} name="prodIngredients" ref={prodIngredient}  placeholder='Ingredientes (Opcional)'/>
                                <span onClick={()=>{handleProductIngredients()}} className="prodEdit">+</span>
                            </div>
                            <div className="ingredientsBox">
                                {
                                    product.ingredients.map((ingredient, index)=>{
                                        return (
                                            <div key={index} className="componentSingle">
                                                <span className='componentName'>
                                                    {ingredient}
                                                </span>
                                                <span  onClick={(e)=>(handleProdIngredientDelete(e))}  className='removeIngredient'>
                                                    +
                                                </span>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <div className="prodBottom">
                            <span>
                                Preços e tamanhos <span>(vazio p/ indisponível)</span> 
                            </span>
                            <div className="sizesContainer">
                                {
                                    product.sizes.map((size, index)=>{
                                        return (
                                            <div key={index} className="sizeSingle">
                                                <span className="sizeName">
                                                    {size.name}
                                                </span>
                                                <div className="singlePrice">
                                                    <span>R$</span>
                                                    <input ref={prodPrices.current[index]} type="number" min="0" defaultValue={size.price} name="price" />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </form>

                    <form>
                        <div className="prodTop">
                            <div className="editSDCategory">

                            <input ref={sideDishAdd} list="sdDishes" id="sdDishesInput" name="sdDishes" placeholder="Acompanhamentos"/>

                            <datalist id="sdDishes">
                                {sdCategories.categories.map((sdCategory, index) =>
                                    <option key={index} value={sdCategory.name} id={sdCategory.id} />
                                )}
                            </datalist>
                            <span onClick={()=>{handleProductSideDishesCatAdd()}} className="prodEdit">+</span>
                            </div>
                        </div>
                        <div className="prodBottom">
                            {
                                product.sideDishesCat.map((sdCategory, index)=>{

                                    return (
                                        <div key={index} className="sdCategorySingle">
                                        <div className="sdCategoryTop">
                                            <span>
                                                <span onClick={(e)=>{handleProductSideDishesCatDelete(e, sdCategory.id)}} className="removeCat">-</span>
                                                {sdCategory.name}
                                            </span>
                                            <label>
                                                <span>Qtn min:</span>  
                                                <input type="number" name="sdCatMin" defaultValue={sdCategory.qtnMin} id="sdCatMin" />
                                            </label>
        
                                            <label>
                                                <span>Qtn max:</span>  
                                                <input type="number" name="sdCatMax" defaultValue={sdCategory.qtnMax} id="sdCatMax" />
                                            </label>
                                        </div>
                                        <div className="sdCategoryBottom">
                                            <ul>
                                                {
                                                    sdCategory.sideDishes.map((sideDish, sd_index)=>{
                                                        return(
                                                            <li key={sd_index}>
                                                                <span onClick={(e)=>{handleProductSideDishRemove(sideDish.name, index, sdCategory.name)}} className="removeCat">-</span>
                                                                <span className="sdName">{sideDish.name}</span>
                    
                                                                <div className="sdPriceContainer">
                                                                    <span>R$</span>
                                                                    <input type="number" name="sdPrice" className="sdPrice" />
                                                                </div>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                        <input onClick={(e)=>{handleProductSubmit()}}  type="button" value="Editar" />
                    </form>

                </div>
            </div>
        </EditProductContainer>
    )
}

export default EditProduct