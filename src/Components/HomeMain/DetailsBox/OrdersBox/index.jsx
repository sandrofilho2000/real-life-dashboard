import React from 'react'
import { OrderBoxContainer, OrderBoxTop, OrderBoxTopA, OrderBoxTopH2 } from './OrdersBox'

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
          <table>
            <tbody>
              <tr>
                <td>
                  Name
                </td>
                <td>
                  Price
                </td>
                <td>
                  Payment
                </td>
                <td>
                  Status
                </td>
              </tr>
              {
                orderItems.map((order, index)=>{
                  const {name, price, payment, status} = order
                  return (
                    <tr key={index}>
                    <td>
                        {name}
                    </td>
    
                    <td>
                        {price}
                    </td>
    
                    <td>
                        {payment}
                    </td>
    
                    <td>
                        <span className={status.toLowerCase()}>{status}</span>
                    </td>
                </tr>
                  )
                })
              } 
            </tbody>
          </table>
    </OrderBoxContainer>
  )
}

export default OrderBox

