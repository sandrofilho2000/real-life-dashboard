import React from 'react'
import { OrderContainer, OrderStatus, OrderTd, OrderTr } from './Order'

const Order = ({name, price, payment, status}) => {
    console.log(name)



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