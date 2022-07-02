import React from 'react'
import { CardContainer, CardIconContainer, CardTextContainer, CardTextName, CardTextNumbers } from './Card'


const Card = ({card}) => {
        const { number, title, icon_class } = card
        return (
          <CardContainer className='cardItem'>
              <CardTextContainer>
                  <CardTextNumbers>
                  {number}
                  </CardTextNumbers>
                  <CardTextName>
                  {title}
                  </CardTextName>
              </CardTextContainer>
              <CardIconContainer>
                  <ion-icon name={icon_class}></ion-icon>
              </CardIconContainer>
          </CardContainer>
        )
    
    
}

export default Card