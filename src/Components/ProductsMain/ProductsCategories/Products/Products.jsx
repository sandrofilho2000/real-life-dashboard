import styled from "styled-components"

export const ProductsContainer = styled.div`
    padding: 0px !important;   
    min-height: 312px;
`

export const ProductsCategories = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0px;
    background-color: var(--main-bg);
    justify-content: space-between;
    z-index: 99;

    ul {
        height: auto;
        display: flex;
        box-sizing: border-box;
        justify-content: flex-start;
        overflow: hidden;
        li{
            margin-right: 10px;
            height: 62px;
            border-radius: 50%;
            width: 62px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            position: relative;


            
            &:hover{

                    border: 3px solid white;

            }
            &.active{
                img{
                    border: 3px solid var(--main-color);
                    transform: scale(1.2)
                }
            }
            

            img{
                border-radius: 50%;
                height: 50px;
                cursor: pointer;
                object-fit: cover;
                width: 50px;
            }
        
        }
    }
    &::before{
        content: '';
        bottom: -1px;
        position: absolute;
        left: 0%;
        width: 90%;
        height: 1px;
        background-color: var(--txt-color);
    }
`

export const ProductsList = styled.div`
    height: auto;
    width: 100%;
    min-height: 230px;
    overflow-y: hidden;
    background-color: var(--main-bg);

    .productsContainerTop{
        width: calc(100% - 35px);
        margin: 0 auto;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h3{
            font-weight: normal;
            font-size: 18px;
        }
        .productAdd{
            height: 30px;
            width: 30px;
            text-align: center;
            font-size: 30px;
            line-height: 30px;
            cursor: pointer;
        }
    }

    .ulContainer{
        max-height: 230px;
        overflow-y: auto;
        width: 100%;
        position: absolute;
        left: 0;
        opacity: 0;
        pointer-events: none;
        z-index: -999;
        top: 62px;
        
        &.active{
            opacity: 1;
            pointer-events: initial;
            z-index: 98;
        }
        ul{
            width: 100%;
            
            
            li{
                padding: 10px;
                box-sizing: content-box;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: flex-start;

                &:first-of-type{
                    padding-top: 0;
                }
    
                &.paused{
                    *:not(.productPause){
                        opacity: 0.6;
                        pointer-events: none;
                    }
                }
    
                &:first-of-type{
                    margin-top: 5px;
                }
    
                div.productSettings{
                    display: flex;
                    align-items: center;
                    line-height: 38px;
                    .productPause, .productDelete{
                        z-index: 10;
                        font-size: 26px;
                        display: flex;
                        cursor: pointer;
                        align-items: center;
    
                        *:hover{
                            color: var(--main-color);
                        }
    
                        ion-icon[name=play]{
                            display: none;
                        }
                        ion-icon[name=pause]{
                            display: flex;
                        }
    
                        &.play{
                            ion-icon[name=play]{
                                display: flex;
                                opacity: 1;
                                pointer-events: initial;
                            }
                            ion-icon[name=pause]{
                                display: none;
                            }
                        }
    
                    }
                    .productDelete{
                        font-size: 23px;
                        cursor: pointer;
                        ion-icon{                        
                            &:hover{
                                color: #fb0b12 !important;
                            }
                        }
                    }
                    .productOrder{
                        cursor: move;
                    }
                }
    
                div.productImage{
                    height: 40px;
                    width: 40px;
                    margin-left: 20px;
                    margin-right: 10px;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 50%;
                    }
                }
    
                span.productName{
                    color: var(--txt-color);
                    background-color: transparent;
                    border: none;
                    outline: none;
    
                    &:focus{
                        background: white;
                        color: #3e3e3e !important;
                        background-color: white;
                    }
                }
    
                div.productEdit,  div.productOrder{
                    z-index: 10;
                    font-size: 26px;
                    display: flex;
                    cursor: pointer;
                    align-items: center;
                    position: absolute;
                    right: 10px;
                    &:hover ion-icon{
                        color: var(--main-color);
                    }
                }

                div.productOrder{
                    right: 35px;
                    cursor: pointer;
                    font-size: 30px;
                    cursor: move;
                }
    
            }
    
    
            li.sortable-chosen{
                opacity: 0.8;
            }
        }
    }
`