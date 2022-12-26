import React, { useEffect, useState } from 'react'
import { OverlayLoadContainer, OverlayLoadLogo } from './OverlayLoad'
import Logo from '../../Images/logo.png'


const OverlayLoad = () => {
    const [domLoaded, setDomLoaded] = useState('')
    useEffect(()=>{
        setDomLoaded('loaded')
    }, [])
    return (
        <OverlayLoadContainer id="overlayLoad" className={`overlayLoad ${domLoaded}`} >
            <OverlayLoadLogo src={Logo}/>
        </OverlayLoadContainer>
    )
}

export default OverlayLoad
