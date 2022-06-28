import React from 'react'
import Order from './Order'
import { OrderBoxContainer, OrderBoxTable, OrderBoxTableTd, OrderBoxTableTr, OrderBoxTop, OrderBoxTopA, OrderBoxTopH2 } from './OrdersBox'

const OrderBox = (props) => {
  
  const orderItems = props['orderItems']

  return (
    <OrderBoxContainer>
        <OrderBoxTop>
          <OrderBoxTopH2>
            Recent Orders
          </OrderBoxTopH2>
          <OrderBoxTopA to="#">
            View All
          </OrderBoxTopA>
        </OrderBoxTop>
          <OrderBoxTable>
            <OrderBoxTableTr>
              <OrderBoxTableTd>
                Name
              </OrderBoxTableTd>
              <OrderBoxTableTd>
                Price
              </OrderBoxTableTd>
              <OrderBoxTableTd>
                Payment
              </OrderBoxTableTd>
              <OrderBoxTableTd>
                Status
              </OrderBoxTableTd>
            </OrderBoxTableTr>

            {
              orderItems.map((order, index)=>{
                const {name, price, payment, status} = order
                return (
                  <Order name={name} price={price} payment={payment} status={status} key={index} />
                )
              })
            } 
            <Order/>
  
  
          </OrderBoxTable>
    </OrderBoxContainer>
  )
}

export default OrderBox

