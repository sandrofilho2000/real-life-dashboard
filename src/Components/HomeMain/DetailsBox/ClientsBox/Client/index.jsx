import React from 'react'
import { ClientContainer, ClientCountry, ClientImg, ClientImgContainer, ClientName, ClientNameCountry } from './Client'

const Client = (props) => {
  const { client } = props
  const { name, country, pic_url } = client

  try{
    return (
      <ClientContainer>
        <ClientImgContainer>
          <ClientImg src={pic_url}/>
        </ClientImgContainer>
        <ClientNameCountry>
          <ClientName>
            {name}
          </ClientName>
          <ClientCountry>
            {country}
          </ClientCountry>
        </ClientNameCountry>
      </ClientContainer>
    )
  }catch{}
}

export default Client


