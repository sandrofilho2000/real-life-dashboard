import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categories_update, category_edit } from '../../../redux/actions/categoryActions'
import { CategoryBoxContainer, CategoryContainerImg, CategoryContainerText } from './CategoryBox'

const CategoryBox = () => {

    const categories = useSelector(state => state.productsNcategory)
    const dispatch = useDispatch()

    const setCategoryOrder = (array) => {
        dispatch(categories_update(array))
    }

    const editCategory = (category) => {
        dispatch(category_edit(category))
    }

    let handleOverlayAddOpen = (e) => {
        document.querySelector(".addCategoryContainer").classList.add("active")
    }

    let handleOverlayEditOpen = (e, name, img, index) => {
        switch (e.detail) {
            case 2:
                var category = {name: name, img: img, index: index}
                editCategory(category)
                document.querySelector(".editCategoryContainer").classList.add("active")
                break;
        }
    }

    const dragItem = useRef(null)
    const dragOverItem = useRef(null)

    const handleSort = () => {
        let _categories = [...categories.categories]

        const draggedItemContent = _categories.splice(dragItem.current, 1)[0]

        _categories.splice(dragOverItem.current, 0, draggedItemContent)

        dragItem.current = null
        dragOverItem.current = null

        categories.categories = _categories

        setCategoryOrder(categories)
    }

    return (
        <CategoryBoxContainer className="optionBoxContainer">
            {
                categories.categories.map((category, index) => {
                    return (
                        <div key={index} onClick={(e) => { handleOverlayEditOpen(e, category.name, category.img, index) }} className="optionSingle"
                            draggable
                            onDragEnd={handleSort}
                            onDragStart={(e) => (dragItem.current = index)}
                            onDragEnter={(e) => (dragOverItem.current = index)}
                        >
                            <CategoryContainerText>
                                {category.name}
                            </CategoryContainerText>
                            <CategoryContainerImg src={category.img} />
                        </div>
                    )
                })
            }
            <div onClick={() => { handleOverlayAddOpen() }} className="cardPlus">
                <span className="noselect">+</span>
            </div>

        </CategoryBoxContainer>
    )
}

export default CategoryBox 