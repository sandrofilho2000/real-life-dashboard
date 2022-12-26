import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EditSideDishContainer } from './EditSideDish'
import { sdishes_add, sdishes_edit, sdishes_update } from '../../../redux/actions/sideDishesActions'

const EditSideDish = () => {
  const dispatch = useDispatch()
  const overlay = useRef(null)
  const sdNameActive = useRef(null)
  const sideDishes = useSelector(state => state.sideDishes)

  let set_sdishes_add = (sdCategory) =>{
    dispatch(sdishes_add(sdCategory))
  }

  let set_sdishes_edit = (sdCategory) =>{
    dispatch(sdishes_edit(sdCategory))
  }

  let set_sdishes_update = (array) =>{
    dispatch(sdishes_update(array))
  }

  let sdCatName = useRef(null)
  let sdName = useRef(null)

  let handleOverlayClose = (e) => {
    overlay.current.classList.remove("active")
  }

  const currSideDishEditing = useSelector(state => state.currSideDishEditing)

  let generateId = (maxLimit = 10000) => {
    let rand = Math.random() * maxLimit;

    rand = Math.floor(rand); // 99

    return rand;
  }

  let handleSdCatEdit = () =>{
    currSideDishEditing.name = sdCatName.current.value.trim()

    currSideDishEditing.sideDishes.forEach((item, index)=>{
      item.categoryId = currSideDishEditing.id
    })

    currSideDishEditing.sideDishes.filter((item, index)=>{
      return item.id !== 0
    })

    set_sdishes_add(currSideDishEditing)
    if(currSideDishEditing.name === ''){
      sdNameActive.current.classList.remove("active")
    }else{
      sdNameActive.current.classList.add("active") 
    }
  }

  let handleSdEdit = () =>{
    let sdNameEdit = {}

    sdNameEdit.categoryId = currSideDishEditing.id
    sdNameEdit.id = generateId()
    sdNameEdit.name = sdName.current.value

    let sdValid = currSideDishEditing.sideDishes.filter((item, index)=>{
      return item.name === sdNameEdit.name
    })

    if(sdValid.length === 0){
      currSideDishEditing.sideDishes.push(sdNameEdit)
    }else{
      alert("Acompanhamento já adicionado!")
    }

    sdName.current.value = ''

    set_sdishes_add(currSideDishEditing)
  }

  let handleSdRemove = (name) =>{
    let sdDishes = currSideDishEditing.sideDishes.filter((item, index)=>{
      return item.name !== name
    })

    currSideDishEditing.sideDishes = [...sdDishes]
    set_sdishes_add(currSideDishEditing)
  }

  let handleSdCatSubmit = (e) =>{
    e.preventDefault()
    if(currSideDishEditing.name !== ''){
      if(currSideDishEditing.sideDishes.length > 1){
        let sdCatIndex = null

        let category = sideDishes.categories.filter((item, index)=>{
          if(item.id === currSideDishEditing.id){
            sdCatIndex = index
            return item.id === currSideDishEditing.id
          }
        })

        sideDishes.categories[sdCatIndex] = currSideDishEditing
        set_sdishes_update(sideDishes)
        handleOverlayClose()
      }else{
        alert("Insira ao menos um acompanhamento!")
      }
    }else{
      alert("Insira um nome válido para a categoria!")
    }
  }

  return (
    <EditSideDishContainer ref={overlay} className='EditSideDishContainer'>
      <div className="editProductWrapper">
        <div className="editProductWrapperTop">
          <p>
            Editar acompanhamento
          </p>

          <span onClick={()=>{handleOverlayClose()}} className='closeContainer'>+</span>
        </div>
        <form>
          
          <input ref={sdCatName} onChange={()=>{handleSdCatEdit()}} defaultValue={currSideDishEditing.name}  type="text" name="sdCategory" id="sdCategory" placeholder='"Bordas Recheadas, Sobremesas..."' />

          <div className='addSd' ref={sdNameActive}>
            <input ref={sdName} onKeyUp={(e)=>{if(e.key === 'Enter'){handleSdEdit()}}} type="text" name="sdName" id="sdName" placeholder='"Cheddar, Molho shoyu..."' />
            <span onClick={()=>{handleSdEdit()}} className="addSDBtn">+</span>
          </div>

          <div className="sideDishesBox">
            {
              currSideDishEditing.sideDishes.map((item, index)=>{
                if(item.id !== 0){
                  return (
                    <div key={index} className="sideDishSingle"><span className="sideDishName">{item.name}</span><span onClick={()=>{handleSdRemove(item.name)}} className="removeSideDish">+</span></div>
                  )
                }
              })
            }
          </div>

          <input type="button" onClick={(e)=>{handleSdCatSubmit(e)}} value="Adicionar" />
        </form>
      </div>
    </EditSideDishContainer>
  )
  
}

export default EditSideDish