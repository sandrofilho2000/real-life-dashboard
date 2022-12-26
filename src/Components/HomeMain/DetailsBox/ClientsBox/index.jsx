import React from 'react'
import Client from './Client'
import { ClienBoxTop, ClienBoxTopH2, ClientBoxContainer, ClientBoxTable } from './ClientsBox'

const ClientsBox = (props) => {
  const clientList = props['orderClients']
  return (
    <ClientBoxContainer>
      <ClienBoxTop>
        <ClienBoxTopH2>
          Recent Customers
        </ClienBoxTopH2>
      </ClienBoxTop>
      <table>
        <tbody>
          {
            clientList.map((client, index)=>{
              return (
                <Client client={client} key={index}/>
              )
            })
          }
        </tbody>

      </table>
    </ClientBoxContainer>
  )
}

export default ClientsBox