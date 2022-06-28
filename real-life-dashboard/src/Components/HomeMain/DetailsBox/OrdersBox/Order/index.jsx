import React from 'react'
import { OrderContainer, OrderStatus, OrderTd } from './Order'

const Order = ({name, price, payment, status}) => {

    try{
        return (
            <OrderContainer>
    
                    <OrderTd>
                        {name}
                    </OrderTd>
    
                    <OrderTd>
                        {price}
                    </OrderTd>
    
                    <OrderTd>
                        {payment}
                    </OrderTd>
    
                    <OrderTd>
                        <OrderStatus className={status.toLowerCase()}>{status}</OrderStatus>
                    </OrderTd>
    
    
            </OrderContainer>
        ) 
    }catch{}

    }
export default Order