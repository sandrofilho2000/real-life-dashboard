import styled from "styled-components";

export const EditProductContainer = styled.div`
    width: 100vw;
    position: fixed;
    height: 100vh;
    background-color: #0000007e;
    display: none;
    align-items: center;
    justify-content: center;

    &.active{
        z-index: 99999;
        display: flex;
    }

    > div.editProductWrapper{
        height: 400px;
        width: 470px;
        background-color: var(--main-bg);
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius);
        padding: 20px;
        overflow: hidden;
        position: relative;

        .prodWrapperTop{
            height: 30px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            line-height: 30px;
            position: relative;

            .closeProd{
                height: 30px;
                width: 30px;
                font-size: 30px;
                user-select: none;
                transform: rotate(45deg);
                line-height: 15px;
                cursor: pointer;
                margin-right: -13px;
            }
        }

                    
        .arrowsMove{
            position: fixed;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: absolute;
            left: 50%;
            top: 50%;
            z-index: 10;
            transform: translate(-50%, 50%);
            padding: 0 5px;

            ion-icon{
                color: var(--txt-color);
                font-size: 30px;
                cursor: pointer;
                position: absolute;
                &[name=caret-forward-outline]{
                    right: 0;
                }
            }
        }

        .formsContainer{
            width: calc(100% + 40px);
            height: auto;
            display: flex;
            left: 50%;
            position: relative;
            transition: 0.4s;
            transform: translateX(-50%);


            form{
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
                min-width: 100%;
                justify-content: center;
                min-height: 320px;
                max-height: 320px;

                > div{
                    width: 100%;
                    input{
                        background-color: transparent;
                        border: none;
                        font-size: 17px;
                        color: var(--txt-color);
                        border-bottom: 1px solid var(--main-color);
                        width: 60%;
                        padding-bottom: 5px;
                        &::placeholder{
                            color: var(--txt-color)
                        }
                    }
                }
                .prodTop{   
                    width: 100%;
                    display: flex;
                    align-items: center;
                    background-color: inherit;
                    justify-content: space-between;

                    .prodPic{
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: relative;

                        input{
                            display: none;
                        }

                        img{
                            height: 180px;
                            width: 180px;
                            border-radius: 50%;
                            object-fit: cover;
                            cursor: pointer;
        
                            &:last-of-type{
                                position: absolute;
                                width: 50px;
                                height: 50px;
                                bottom: 0;
                                left: 55%;
                                border: 2px solid white;
                            }
                        }
                    }

                }
        
                .prodBottom{
                    margin-top: 10px;
                    .prodName{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        margin-top: 40px;
                    }
                }
            }

            form:nth-of-type(2){

                .prodTop, .prodBottom{ 
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    height: 50%;
                    width: 80%;
                    position: relative;

                    .nameEdit{
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        .prodEdit{
                            position: absolute;
                            right: 0px;
                            font-size: 25px;
                            cursor: pointer;
    
    
                            &:hover{
                                color: var(--main-color);
                            }
                        }
                    
                    }

                    .ingredientsBox{
                        width: 100%;
                        margin: 0 auto;
                        min-height: 60px;
                        padding: 10px;
                        padding-top: 4px;
                        border-radius: 10px;
                        margin-top: 0px;
                        display: flex;
                        flex-wrap: wrap;
                        max-height: 120px;
                        overflow-y: auto;

                        .componentSingle{
                            border-bottom: 1px solid var(--main-color);
                            height: 20px;
                            background-color: var(--main-color);
                            font-size: 13px;
                            color: white;
                            padding: 3px 5px;
                            box-sizing: content-box;
                            display: flex;
                            align-items: center;
                            margin-top: 10px;
                            &:not(:last-of-type){
                                margin-right: 5px;
                            }

                            span{
                                color: #ffffff;
                                height: 100%;
                                height: 14px;
                                font-weight: bold;
                                display: inline-block;
                            }
                            .removeIngredient{
                                font-size: 26px;
                                cursor: pointer;
                                line-height: 17px;
                                transform: rotate(-45deg);
                                margin-left: 20px;
                                user-select: none;

                                &:hover{
                                    color: #fb0b12 !important;
                                }
                            }
                        }
                    }

                }
                
                .prodBottom{
                    margin-top: 25px;
                    max-height: 120px;
                    min-height: 120px;
                    width: 80%;

                    > span {
                        display: flex;
                        align-items: center;
                        > span{
                            font-size: 12px;
                            margin-left: 6px;
                            margin-bottom: -2px;
                        }
                    }
                    .sizesContainer{
                        box-sizing: content-box;
                        overflow-y: auto;
                        width: 100%;
                        margin-top: 10px;
                        .sizeSingle{
                            display: flex;
                            margin-top: 10px;

                            span.sizeName{
                                font-size: 13px;
                            }

                            .singlePrice{
                                margin-left: 10px;
                                font-size: 13px;
                                input{
                                    font-size: 14px;
                                    width: 45px;
                                    margin-top: -5px;
                                    padding-bottom: 2px;
                                    margin-left: 10px
                                }
                            }
                        }
                    }
                }
            }

            form:nth-of-type(3){
                .prodTop, .prodBottom{
                    width: 80%;

                    .editSDCategory{
                        width: 200%;
                        margin: 0 auto;
                        position: relative;
                        display: flex;
                        justify-content: center;
                        input{
                            margin: 0 auto;
                            font-size: 13px;
                        }

                        span{
                            position: absolute;
                            right: 0px;
                            font-size: 25px;
                            cursor: pointer;

                            &:hover{
                                color: var(--main-color);
                            }
                        }
                    }
                }

                .removeCat{
                    display: inline-block;
                    font-size: 40px;
                    height: 30px;
                    line-height: 30px;
                    width: 30px;
                    user-select: none;
                    cursor: pointer;
                    text-align: center;
                    &:hover{
                        color: #fb0b12;
                    }
                }

                .prodTop{
                    height: 15%;
                    align-items: flex-start;
                }

                .prodBottom{
                    overflow: auto;
                    height: 85%;
                    max-height: 260px;
                    width: 95%;
                    margin-bottom: 30px;
                    &:not(:last-of-type){
                        border-bottom: 1px solid var(--main-color);
                        padding-bottom: 30px;
                    }
                    .sdCategoryTop{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        > span{
                            font-size: 12px;
                            display: flex;
                            align-items: center;
                        }
                        *{
                            white-space: nowrap;
                        }
                        label{
                            display: flex;
                            align-items: center;
                            span{
                                display: inline-block;
                                height: auto;
                                font-size: 12px;
                            }
                            input{
                                width: 50px;
                                padding-bottom: 0;
                                text-align: center;
                            }
                        }
                    }

                    .sdCategorySingle{
                        width: 95%;
                        margin-bottom: 30px;
                        &:not(:last-of-type){
                            border-bottom: 1px solid var(--main-color);
                            padding-bottom: 30px;
                        }
                        .sdCategoryTop{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            > span{
                                font-size: 12px;
                                display: flex;
                                align-items: center;
                            }
                            *{
                                white-space: nowrap;
                            }
                            label{
                                display: flex;
                                align-items: center;
                                span{
                                    display: inline-block;
                                    height: auto;
                                    font-size: 12px;
                                }
                                input{
                                    width: 50px;
                                    padding-bottom: 0;
                                    text-align: center;
                                }
                            }
                        }

                        .sdCategoryBottom{
                            ul{
                                overflow-y: auto;
                                max-height: 100px;
                                margin-top: 10px;
                                padding: 0 10px;
                                li{
                                    font-size: 13px;
                                    margin-bottom: 10px;
                                    display: flex;
                                    align-items: center;
                                    position: relative;

                                    .sdPriceContainer{
                                        margin-left: 10px;
                                        font-size: 13px;
                                        position: absolute;
                                        right: 10px;
                                        input{
                                            font-size: 14px;
                                            width: 45px;
                                            margin-top: -5px;
                                            padding-bottom: 2px;
                                            margin-left: 10px;
                                        }
                                    }
                                }
                            }
                        }
                    }
            
                }

                input[type=button]{
                    border: none;
                    outline: none;
                    width: 87px;
                    cursor: pointer;
                    position: absolute;
                    padding: 7px 12px;
                    -webkit-text-decoration: none;
                    text-decoration: none;
                    background-color: var(--main-color) !important;
                    border-radius: 6px;
                    font-size: 15px;
                    color: #ffffff !important;
                    bottom: -10px;
                    right: 20px;
                }
            }
        }
        
    }
    `
