import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categories_update } from '../../../redux/actions/categoryActions'
import { AddCategoryContainer } from './AddCategory'

const AddCategory = () => {

    const categories = useSelector(state => state.productsNcategory)

    const dispatch = useDispatch()

    const addNewCategory = (array) => {
        dispatch(categories_update(array))
    }

    const overlay = useRef(null)
    const form = useRef(null)
    const catImg = useRef(null)
    const catName = useRef(null)

    let handleOverlayClose = (e) => {
        overlay.current.classList.remove("active")
    }

    let handleCatSubmit = (e) =>{
        e.preventDefault()
        let newCatName = catName.current.value
        let newCatImg = form.current.catPic.files

        if(newCatName === ''){
            alert("POR FAVOR, INSIRA UM NOME PARA SUA CATEGORIA!")
        }else{
            if(!newCatImg || newCatImg.length === 0){
                alert("POR FAVOR, INSIRA UMA IMAGEM PARA SUA CATEGORIA!")
            }else{
                newCatImg = URL.createObjectURL(form.current.catPic.files[0]);
                let newCat = {
                    name: newCatName,
                    slug: newCatName.toLowerCase().replaceAll(" ", "-"),
                    img: newCatImg,
                    id: '09876',
                    products: []
                }

                newCat.position = categories.categories.length + 1
                categories.categories.push(newCat)
                addNewCategory(categories)
                form.current.catPic.setAttribute("type", "text")
                form.current.catPic.setAttribute("type", "file")
                form.current.catName.value = ''
                catImg.current.setAttribute("src", "https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=")
                handleOverlayClose()
            }
        }
    }
    
    let handleCatPic = (e) =>{
        let file = URL.createObjectURL(form.current.catPic.files[0]);
        catImg.current.setAttribute("src", file)
    }

    return (
        <AddCategoryContainer ref={overlay} className='addCategoryContainer'>
            <div className="addCategoryWrapper">
                <div className="catWrapperTop">
                    <span>
                        Nova categoria
                    </span>
                    <div onClick={()=>{handleOverlayClose()}} className="closeCat">
                        +
                    </div>
                </div>
                <form ref={form}>

                    <div className="catWrapperPic">
                        <label>
                            <input onChange={(e)=>{handleCatPic(e)}} name="catPic" type="file"/>
                            <img ref={catImg} src="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=" />
                        </label>
                    </div>

                    <div className="catWrapperName">
                        <input name="catName"  type="text" ref={catName} placeholder='Nome da categoria' />
                    </div>

                    <div className='catWrapperSubmit'>
                        <input onClick={(e)=>{handleCatSubmit(e)}} type="submit" value="Adicionar" />
                    </div>

                </form>
            </div>
        </AddCategoryContainer>
    )
}

export default AddCategory