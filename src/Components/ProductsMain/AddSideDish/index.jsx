import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddSideDishContainer } from './AddSideDish'
import { sdishes_add, sdishes_update } from '../../../redux/actions/sideDishesActions'

const AddSideDish = () => {
  const dispatch = useDispatch()
  const overlay = useRef(null)
  const sdNameActive = useRef(null)
  const sideDishes = useSelector(state => state.sideDishes)

  let set_sdishes_add = (sdCategory) =>{
    dispatch(sdishes_add(sdCategory))
  }

  let set_sdishes_update = (array) =>{
    dispatch(sdishes_update(array))
  }

  let sdCatName = useRef(null)
  let sdName = useRef(null)

  let handleOverlayClose = (e) => {
    overlay.current.classList.remove("active")
  }

  const currSideDishAdding = useSelector(state => state.currSideDishAdding)

  let generateId = (maxLimit = 10000) => {
    let rand = Math.random() * maxLimit;

    rand = Math.floor(rand); // 99

    return rand;
  }

  let handleSdCatAdd = () =>{
    currSideDishAdding.name = sdCatName.current.value.trim()
    currSideDishAdding.id = generateId()

    currSideDishAdding.sideDishes.forEach((item, index)=>{
      item.categoryId = currSideDishAdding.id
    })

    currSideDishAdding.sideDishes.filter((item, index)=>{
      return item.id !== 0
    })

    set_sdishes_add(currSideDishAdding)
    if(currSideDishAdding.name === ''){
      sdNameActive.current.classList.remove("active")
    }else{
      sdNameActive.current.classList.add("active") 
    }
  }

  let handleSdAdd = () =>{
    let sdNameAdd = {}

    sdNameAdd.categoryId = currSideDishAdding.id
    sdNameAdd.id = generateId()
    sdNameAdd.name = sdName.current.value

    let sdValid = currSideDishAdding.sideDishes.filter((item, index)=>{
      return item.name === sdNameAdd.name
    })

    if(sdValid.length === 0){
      currSideDishAdding.sideDishes.push(sdNameAdd)
    }else{
      alert("Acompanhamento já adicionado!")
    }

    sdName.current.value = ''

    set_sdishes_add(currSideDishAdding)
  }

  let handleSdRemove = (name) =>{
    let sdDishes = currSideDishAdding.sideDishes.filter((item, index)=>{
      return item.name !== name
    })

    currSideDishAdding.sideDishes = [...sdDishes]
    set_sdishes_add(currSideDishAdding)
  }

  let handleSdCatSubmit = (e) =>{
    e.preventDefault()
    if(currSideDishAdding.name !== ''){
      if(currSideDishAdding.sideDishes.length > 1){
        sideDishes.categories = [currSideDishAdding].concat(sideDishes.categories)
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
    <AddSideDishContainer ref={overlay} className='AddSideDishContainer'>
      <div className="addProductWrapper">
        <div className="addProductWrapperTop">
          <p>
            Adicionar acompanhamento
          </p>

          <span onClick={()=>{handleOverlayClose()}} className='closeContainer'>+</span>
        </div>
        <form>
          
          <input ref={sdCatName} onChange={()=>{handleSdCatAdd()}} type="text" name="sdCategory" id="sdCategory" placeholder='"Bordas Recheadas, Sobremesas..."' />

          <div className='addSd' ref={sdNameActive}>
            <input ref={sdName} onKeyUp={(e)=>{if(e.key === 'Enter'){handleSdAdd()}}} type="text" name="sdName" id="sdName" placeholder='"Cheddar, Molho shoyu..."' />
            <span onClick={()=>{handleSdAdd()}} className="addSDBtn">+</span>
          </div>

          <div className="sideDishesBox">
            {
              currSideDishAdding.sideDishes.map((item, index)=>{
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
    </AddSideDishContainer>
  )
}

export default AddSideDish