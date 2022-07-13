import styled from "styled-components";

export const OrderContainer = styled.tr`
    &:hover{
        background-color: var(--main-color) !important;

        *{
            color: white !important;
        }
    }
`

export const OrderTd = styled.td`
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    &:nth-child(3) {
        text-align: center;
    }

    &:last-of-type{
        text-align: end;
    }
`

export const OrderStatus = styled.span `
    color: white !important;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    padding: 2px 4px;

    &.delivered{
        background: #8de02c;
    }

    &.pending{
        background: #f9ca3f;
    }

    &.return{
        background: #ff0000;
    }

    &.inprogress{
        background: #1795ce;
    }
`