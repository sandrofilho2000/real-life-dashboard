import React, { createRef, useRef, useState, useE } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddProductContainer } from './AddProduct'
import { product_add } from '../../../redux/actions/productActions'
import { categories_update } from '../../../redux/actions/categoryActions'
import { useEffect } from 'react'

const AddProduct = () => {

    let[containerLeft, setContainerLeft] = useState(0)

    const set_product_adding = (product) =>{
        dispatch(product_add(product))
    }

    const update_categories = (array) =>{
        dispatch(categories_update(array))
    }

    const categories = useSelector(state => state.productsNcategory)
    const currProductAdding = useSelector(state => state.currProductAdding)

    /* list of all sidedish categories */
    const sdCategoriesAll = useSelector(state => state.sideDishes.categories)

    let category = categories.categories.filter((category, index) => {
        return category.id === currProductAdding.categoryId
    })
    
    
    category = category.length === 0 ? [{sideDishes: []}] : category = category
    
    let sdCategoriesIDFixed = category[0].sideDishes
    let sdCategoriesFixed = []

    sdCategoriesAll.forEach((item, index)=>{
        if(sdCategoriesIDFixed.includes(item.id)){
            sdCategoriesFixed.push(item)
        }
    })

    const dispatch = useDispatch()

    const overlay = useRef(null)
    const form = useRef([])
    const prodImg = useRef(null)
    const prodIngredient = useRef(null)
    const prodName = useRef(null)
    const prodPrices = useRef([])

    prodPrices.current = currProductAdding.product.sizes.map((_, i) => prodPrices.current[i] ?? createRef());
    
    let generateId = (maxLimit = 10000) => {
        let rand = Math.random() * maxLimit;

        rand = Math.floor(rand); // 99

        return rand;
    }

    let handleOverlayClose = () => {
        overlay.current.classList.remove("active")
    }

    let handleProductName = () =>{
        currProductAdding.product.name = prodName.current.value
        set_product_adding(currProductAdding)
    }

    let handleProdPic = () =>{
        let file = URL.createObjectURL(form.current.prodPic.files[0]);
        prodImg.current.setAttribute("src", file)
        currProductAdding.product.img = file
    }

    let handleProdIngredients = () =>{
        let ingredient = prodIngredient.current.value.trim()
        currProductAdding.product.ingredients.push(ingredient)
        prodIngredient.current.value = ''
        set_product_adding(currProductAdding)
    }

    let handleProdIngredientDelete = (e) =>{
        let ingredient = e.currentTarget.parentElement.querySelector(".componentName").innerHTML.trim()
        let ingredients = currProductAdding.product.ingredients.filter((item)=>{
            return item !== ingredient
        })
        currProductAdding.product.ingredients = ingredients
        set_product_adding(currProductAdding)
    }

    let handleProductPrices = () =>{
        let sizes = []
        prodPrices.current.forEach((size)=>{
            let sizePrice = {}
            sizePrice.name = size.current.closest(".sizeSingle").querySelector(".sizeName").innerHTML 
            sizePrice.price = size.current.value
            sizes.push(sizePrice)
        })
        
        currProductAdding.product.sizes = sizes
        set_product_adding(currProductAdding)
    }

    let handleDeleteSdCategory = (e, sdCatId) =>{

        let sdDishCatName = e.currentTarget.closest(".sdCategorySingle").querySelector("span").innerText.replace('-', '').trim()
        if(window.confirm(`Deseja mesmo deletar essa categoria? (${sdDishCatName})`)){
    
            let _sdCategories = currProductAdding.product.sideDishes.filter((sdDishCat)=>{
                return sdDishCat !== sdCatId
            })

            currProductAdding.product.sideDishes = _sdCategories

            set_product_adding(currProductAdding)

        }
            
    }

    let handleDeleteSd= (e) =>{
        let sdDishName = e.currentTarget.closest("li").querySelector(".sdName").innerText.trim()
        if(window.confirm(`Deseja mesmo deletar esse acompanhamento? (${sdDishName})`)){
            e.currentTarget.closest("li").remove()
        }
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
                        if(!form.current.prodPic.files.length !== 0){
                            setContainerLeft(containerLeft+=1)
                        }else{
                            alert("Insira uma imagem válida")
                        }

                    }else{
                        alert("Insira um nome válido")
                    }
                }else if(containerLeft == 1){
                    let prodPricesValid = []

                    console.log(prodPrices.current)

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

    let handleProdSubmit = (e) =>{
        e.preventDefault()
        let sdCategories = [

        ]
        document.querySelectorAll(".sdCategorySingle").forEach((sdCategory)=>{
            let sdCatSingle = {}
            sdCatSingle.name = sdCategory.querySelector(".sdCategoryTop span").innerText.replace('-', '').trim()
            sdCatSingle.qtnMin = sdCategory.querySelector("#sdCatMin").value
            sdCatSingle.qtnMax = sdCategory.querySelector("#sdCatMax").value
            sdCatSingle.sideDishes = []

            sdCategory.querySelectorAll(".sdCategoryBottom li").forEach((li)=>{
                let sdSingle = {}
                sdSingle.name = li.querySelector(".sdName").innerHTML.trim()
                sdSingle.price = li.querySelector(".sdPrice").value.trim()
                sdCatSingle.sideDishes.reverse().push(sdSingle)
            })

            sdCategories.push(sdCatSingle)
        })
        let newProductAdd = {
            ...currProductAdding.product,
            id: generateId(10000),
            categoryId : currProductAdding.categoryId,
            sideDishesCat : sdCategories
        }
        
        categories.categories[currProductAdding.index].products.push(newProductAdd)
        update_categories(categories)

        overlay.current.classList.remove("active")
    }

    return (
        <AddProductContainer ref={overlay} className='addProductContainer'>
            <div className="addProductWrapper">
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
                                    <input onChange={(e)=>{handleProdPic(e)}} name="prodPic" type="file"/>
                                    <img ref={prodImg} src="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=" />
                                    <img src={currProductAdding.categoryImg}/>
                                </label>
                            </div>
                        </div>
                        <div className="prodBottom">
                            <div className="prodName">
                                <input ref={prodName} type="text" placeholder='Nome do produto' />
                            </div>
                        </div>
                    </form>

                    <form>
                        <div className="prodTop">
                            <div className="nameAdd">
                                <input onKeyUp={(e)=>{if(e.key === 'Enter'){handleProdIngredients()}}}  ref={prodIngredient} name="prodIngredients"  placeholder='Ingredientes (Opcional)'/>
                                <span onClick={()=>{handleProdIngredients()}} className="prodAdd">+</span>
                            </div>
                            <div className="ingredientsBox">
                                {
                                    currProductAdding.product.ingredients.map((ingredient, index)=>{
                                        return (
                                            <div key={index} className="componentSingle">
                                                <span className='componentName'>
                                                    {ingredient}
                                                </span>
                                                <span onClick={(e)=>(handleProdIngredientDelete(e))} className='removeIngredient'>
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
                                    currProductAdding.fixedSizes.map((size, index)=>{
                                        return (
                                            <div key={index} className="sizeSingle">
                                                <span className="sizeName">
                                                    {size}
                                                </span>
                                                <div className="singlePrice">
                                                    <span>R$</span>
                                                    <input ref={prodPrices.current[index]} type="number" min="0" name="price" />
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
                            <div className="addSDCategory">

                            <input list="sdDishes" id="sdDishesInput" name="sdDishes" placeholder="Acompanhamentos"/>

                            <datalist id="sdDishes">
                                {
                                    sdCategoriesAll.map((item, index)=>{
                                        return(
                                            <option  key={index} value={item.name} id={item.id} />
                                        )
                                    })
                                }
                            </datalist>
                            <span /* onClick={()=>{handleSdCategory()}} */ className="prodAdd">+</span>
                            </div>
                        </div>
                        <div className="prodBottom">
                            {
                                sdCategoriesFixed.map((item_1, index_1)=>{
                                    return (
                                        <div key={index_1} className="sdCategorySingle">
                                        <div className="sdCategoryTop">
                                            <span>
                                                <span onClick={(e)=>{handleDeleteSdCategory(e, item_1.id)}} className="removeCat">-</span>
                                                {item_1.name}
                                            </span>
                                            <label>
                                                <span>Qtn min:</span>  
                                                <input type="number" name="sdCatMin" id="sdCatMin" />
                                            </label>
        
                                            <label>
                                                <span>Qtn max:</span>  
                                                <input type="number" name="sdCatMax" id="sdCatMax" />
                                            </label>
                                        </div>
                                        <div className="sdCategoryBottom">
                                            <ul>
                                                {
                                                    item_1.sideDishes.map((item_2, index_2)=>{
                                                        return(
                                                            <li key={index_2}>
                                                                <span onClick={(e)=>{handleDeleteSd(e)}} className="removeCat">-</span>
                                                                <span className="sdName">{item_2.name}</span>
                    
                                                                <div className="sdPriceContainer">
                                                                    <span>R$</span>
                                                                    <input ref={prodPrices.current[index_2]} type="number" name="sdPrice" className="sdPrice" />
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
                        <input onClick={(e)=>{handleProdSubmit(e)}}  type="button" value="Adicionar" />
                    </form>

                </div>
            </div>
        </AddProductContainer>
    )
}

export default AddProduct