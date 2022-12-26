import styled from "styled-components";

export const  CategoryBoxContainer= styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    display: -ms-grid;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(4,1fr);

    *{
        user-select: none;
    }

    @media (max-width: 991px){
        &{
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 480px){
        &{
            grid-template-columns: repeat(1, 1fr);
        }
    }

    > div{
        position: relative;
        border-radius: 20px;
        display: flex;
        cursor: pointer;
        justify-content: space-between;
        min-height: 160px;
        padding: 0 5%;
        align-items: center;
        background-color: var(--main-bg);
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius);
        
        &:hover{
            background-color: var(--main-color) !important;
            *{
                color: #fff !important;
            }
        }

        &.cardPlus{
            background: #20B042;
            text-align: center;
            &:hover{
                background: #20B042 !important;
            }
            span{
                line-height: 161px;
                width: 100%;
                text-align: center;
                color: #fff;
                height: 100%;
                font-size: 96px;
            }
        }

        &.sortable-chosen{
            opacity: 0.8;
            cursor: move;
        } 
    }
`



export const CategoryContainerText = styled.h3`
    font-size: 19px;
    display: block;
    width: 50%;
    font-weight: 400;
    color: #999999;
    margin-right: 5px;
`


export const CategoryContainerImg = styled.img`
    height: 75px;
    width: 75px;
    object-fit: cover;
    border-radius: 50%; 
`