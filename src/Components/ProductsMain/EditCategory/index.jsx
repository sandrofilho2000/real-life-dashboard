import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categories_update } from '../../../redux/actions/categoryActions'
import { EditCategoryContainer } from './EditCategory'

const EditCategory = () => {

    const categories = useSelector(state => state.productsNcategory)
    const currCat = useSelector(state => state.currCatEdit)
    const dispatch = useDispatch()

    const editCategory = (array) => {
        dispatch(categories_update(array))
    }

    const deleteCategory = (array) => {
        dispatch(categories_update(array))
    }

    const overlay = useRef(null)
    const form = useRef(null)
    var catImg = useRef(null)
    var catName = useRef(null)

    var oldCatName = currCat.name
    var oldCatImg = currCat.img
    var catIndex = currCat.index

    let handleOverlayClose = (e) => {
        overlay.current.classList.remove("active")
    }

    let handleCatEdit = (e) =>{
        e.preventDefault()
        let newCatName = catName.current.value
        let newCatImg = catImg.current.src

        let oldCat = categories.categories[catIndex]
        
        if(newCatName === ''){
            alert("POR FAVOR, INSIRA UM NOME PARA SUA CATEGORIA!")
        }else{

            oldCat.name = newCatName
            oldCat.img = newCatImg
            
            editCategory(categories)
            handleOverlayClose()
        }
    }

    let handleCatDelete = (e) =>{

        e.preventDefault()

        if(window.confirm(`Deseja realmente excluir essa categoria? (${catName.current.value})`)){
            let _categories = categories.categories
            const index = _categories.indexOf(categories.categories[catIndex]);
            if (index > -1) {
                _categories.splice(index, 1);
            }
            
            categories.categories = _categories
    
            deleteCategory(categories)
            handleOverlayClose()
        }
    }
    
    let handleCatPic = (e) =>{
        let file = URL.createObjectURL(form.current.catPic.files[0]);
        catImg.current.setAttribute("src", file)
    }

    return (
        <EditCategoryContainer ref={overlay} className='editCategoryContainer'>
            <div className="editCategoryWrapper">
                <div className="catWrapperTop">
                    <span>
                        Editar categoria
                    </span>
                    <div onClick={()=>{handleOverlayClose()}} className="closeCat">
                        +
                    </div>
                </div>
                <form ref={form}>

                    <div className="catWrapperPic">
                        <label>
                            <input onChange={(e)=>{handleCatPic(e)}} name="catPic" type="file"/>
                            <img ref={catImg} src={oldCatImg} />
                        </label>
                    </div>

                    <div className="catWrapperName">
                        <input name="catName"  type="text" ref={catName} defaultValue={oldCatName} placeholder='Nome da categoria' />
                    </div>

                    <div className='catWrapperSubmit'>
                        <input onClick={(e)=>{handleCatDelete(e)}} type="submit" value="Excluir" />
                        <input onClick={(e)=>{handleCatEdit(e)}} type="submit" value="Editar" />
                    </div>

                </form>
            </div>
        </EditCategoryContainer>
    )
}

export default EditCategory