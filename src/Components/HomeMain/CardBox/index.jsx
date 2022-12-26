import React from 'react'
import Card from './Card'
import { CardBoxContainer } from './CardBox'

const CardBox = (props) => {
    const { cardBoxItems } = props

    return (
        <CardBoxContainer className='cardBoxContainer dark'>
            {
                cardBoxItems.map((card, index)=>{
                    return (
                        <Card card={card} key={index}/>
                    )
                })
            } 
        </CardBoxContainer>
    )
}

export default CardBox