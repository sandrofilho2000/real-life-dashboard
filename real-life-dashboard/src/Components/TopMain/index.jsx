import React from 'react'

import { 
    TopMainContainer,
    TopMainToggle,
    TopMainSearch,
    TopMainSearchLabel,
    TopMainSearchLabelInput,
    TopMainUserContainer,
    TopMainUserContainerPic 
} from './TopMain' 

import User from '../../Images/e.jpeg'


const TopMain = (handleMenuToggle) => {

    const handleMenu = handleMenuToggle['handleMenuToggle']

    return (
        <TopMainContainer>
            <TopMainToggle className='toggle' onClick={handleMenu}>
                <ion-icon name="menu-outline"></ion-icon>
            </TopMainToggle>
            <TopMainSearch>
                <TopMainSearchLabel>
                    <ion-icon name="search-outline"></ion-icon>
                    <TopMainSearchLabelInput placeholder='Search'/>
                </TopMainSearchLabel>
            </TopMainSearch>
            <TopMainUserContainer to="#" >
                <TopMainUserContainerPic src={User} />
            </TopMainUserContainer>
        </TopMainContainer>
    )
}

export default TopMain