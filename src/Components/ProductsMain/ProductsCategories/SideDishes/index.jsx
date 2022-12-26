import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sdishes_edit, sdishes_update } from '../../../../redux/actions/sideDishesActions'
import { SideDishContainer } from './SideDishes'

const SideDishesContainer = () => {
  const sideDishes = useSelector(state => state.sideDishes)
  const currSideDishEditing = useSelector(state => state.currSideDishEditing)
  
  const dispatch = useDispatch()

  let updatedSdishArray = (array) =>{
    dispatch(sdishes_update(array))
  }

  let set_sdishes_edit = (sdCategory) =>{
    dispatch(sdishes_edit(sdCategory))
  }



  let handleSDOpen = (e) =>{
    e.target.closest(".sideDishcategory").classList.toggle("active")
  }

  let handleSdDelete = (sdId, sdCategoryId, sdName) =>{
    if(window.confirm(`Deseja realmente excluir esse acompanhamento? (${sdName})`)){
        let sdCategory = sideDishes.categories.filter((sdCategory, index) => {
            return sdCategory.id === sdCategoryId
        })

        let sdCategoryIndex = null
        sideDishes.categories.filter((sdCategory, index) => {
            if(sdCategory.id === sdCategoryId){
              sdCategoryIndex = index
            }
        })

        let sdDishes = sideDishes.categories[sdCategoryIndex].sideDishes.filter((sidedish, index) => {
          return sidedish.id !== sdId
        })

        sdCategory[0].sideDishes = sdDishes

        sideDishes.categories[sdCategoryIndex] = sdCategory[0]

        updatedSdishArray(sideDishes)
        
    } 
  }

  let handleOverlayAddOpen = () =>{
    document.querySelector(".AddSideDishContainer").classList.add("active")

  }

  let handleOverlayEditOpen = (sdCategory) =>{
    document.querySelector(".EditSideDishContainer").classList.add("active")
    let _currSideDishEditing = {...sdCategory}
    set_sdishes_edit(_currSideDishEditing)
  }

  return (
    <SideDishContainer>
        <div className="sideDishTop">
            <span>
              Acompanhamentos
            </span>
            <div onClick={(e)=>{handleOverlayAddOpen(e)}} className="newGroup">
                +   
            </div>
        </div>
        <div className="sideDishesWrapper">

          {
            sideDishes.categories.map((sdDish, index)=>{
              return(
                <div key={index} className="sideDishcategory">
                <div className='categoryTop'>
                  <span className='categoryName'>
                    {sdDish.name}
                  </span>
                  <div className='categorySettings'>
                    <div className="sdAdd">
                      <ion-icon onClick={()=>{handleOverlayEditOpen(sdDish)}} name="create-outline"></ion-icon>
                    </div>
                    <div onClick={(e)=>{handleSDOpen(e)}} className="sdCategoryOpen">
                      <ion-icon name="caret-down-outline"></ion-icon>
                    </div>
                  </div>
                </div>
                <ul>
                  {
                    sdDish.sideDishes.map((sd, index)=>{
                      return (
                        <li key={index}>
                          <span className="sdName">
                            {sd.name}
                          </span>
                          <div onClick={()=>{handleSdDelete(sd.id, sd.categoryId, sd.name)}} className="sdDelete">
                            <ion-icon name="trash"></ion-icon>
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



        </div>
    </SideDishContainer>
  )
}

export default SideDishesContainer