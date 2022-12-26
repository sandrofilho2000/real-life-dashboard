import styled from "styled-components"

export const SideDishContainer = styled.div`
    padding: 10px !important;
    max-height: 350px;
    .sideDishTop{
        height: 40px;
        width: 100%;
        text-align: end;
        display: flex;
        justify-content: space-between;
        position: relative;
        line-height: 30px;
        &::before{
            content: '';
            bottom: -1px;
            position: absolute;
            left: -10px;
            width: calc( 90% + 10px );
            height: 1px;
            background-color: var(--main-color);
        }
        .newGroup{
            height: 30px;
            width: 30px;
            text-align: center;
            font-size: 30px;
            line-height: 30px;
            cursor: pointer;
            &:hover{
                color: var(--main-color);
            }
        }
    }

    .sideDishesWrapper{
        height: calc(100% - 30px) ;
        margin-top: 15px;
        overflow-y: auto;
        padding-right: 10px;
        overflow-x: hidden;
        .sideDishcategory{
            position: relative;
            margin-bottom: 20px;
            .categoryTop{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .categoryName{
                    font-size: 17px;
                }

                .categorySettings{
                    line-height: 20px;
                }
            }

            *{
                transition: 0.4s;
            }

            ul{
                padding-top: 00px;
                height: 0;
                opacity: 0;
                z-index: -999;
                padding-left: 10px;
                position: relative;
                li{
                    margin-bottom: 5px;
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    transition: 0s;
                    position: absolute;
                    top: 0;
                    div{
                        font-size: 20px;

                        &.sdDelete{
                            cursor: pointer;
                            &:hover{
                                ion-icon{
                                    color: #fb0b12 !important;
                                }
                            }
                        }
                    }
                }
            }

            &.active{
                ul{
                    padding-top: 10px;
                    height: auto;
                    opacity: 1;
                    z-index: initial;

                    li{
                        position: relative;
                        top: unset;
                    }
                }

                .categorySettings{
                    line-height: 20px;

                    > div{
                        display: flex;
                        align-items: center;
                    }
                    .sdCategoryOpen{
                        transform: rotate(180deg);
                    }
                }
            }

            &::before{
                content: '';
                bottom: -10px;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                width: 100%;
                height: 1px;
                background-color: var(--main-color);
            }

            .categorySettings{
                    display: flex;
                    ion-icon:hover{
                        color: var(--main-color) !important;
                    }
                    .sdCategoryOpen{
                        cursor: pointer;
                    }
                }
        }
    }
`
