import styled from "styled-components";

export const AddSideDishContainer = styled.div`
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

    > div.addProductWrapper{
        height: 400px;
        width: 470px;
        background-color: var(--main-bg);
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius);
        padding: 20px;
        overflow: hidden;
        position: relative;

        .addProductWrapperTop{
            height: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            line-height: 30px;
            position: relative;

            .closeContainer{
                    height: 30px;
                    width: 30px;
                    font-size: 30px;
                    user-select: none;
                    transform: rotate(45deg);
                    line-height: 42px;
                    cursor: pointer;
                    margin-right: -13px;
            }
        }

        form{
            margin-top: 55px;
            input{
                background-color: transparent;
                border: none;
                font-size: 13px;
                color: var(--txt-color);
                border-bottom: 1px solid var(--main-color);
                width: 60%;
                padding-bottom: 5px;
                margin-bottom: 45px;
                &::placeholder{
                    color: var(--txt-color);
                    font-size: 13px
                }
                
            }
            
            div.addSd{
                width: 60%;
                display: flex;
                justify-content: space-between;
                pointer-events: none;
                opacity: 0.5;
                cursor: not-allowed;
                &.active{
                    pointer-events: initial;
                    opacity: 1;
                    cursor: initial;
                }

                input{
                    width: 80%;
                }

                span{
                    height: 24px;
                    width: 24px;
                    text-align: center;
                    font-size: 24px;
                    line-height: 24px;
                    cursor: pointer;
                }
            }

            > div.sideDishesBox{
                width: 100%;
                margin: 0 auto;
                min-height: 60px;
                padding: 10px 0;
                padding-top: 4px;
                border-radius: 10px;
                margin-top: 0px;
                margin-left: -10px;
                display: flex;
                flex-wrap: wrap;
                max-height: 120px;
                overflow-y: auto;
                
                .sideDishSingle{
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
                    margin-left: 10px;
                    .sideDishName{
                        color: #ffffff;
                        height: 100%;
                        height: 14px;
                        font-weight: bold;
                        display: inline-block;
                    }

                    .removeSideDish{
                        font-size: 26px;
                        cursor: pointer;
                        color: #ffffff;
                        line-height: 17px;
                        transform: rotate(-45deg);
                        margin-left: 20px;
                        user-select: none;
                    }
                }
            }
            
            > input[type=button]{
                border: none;
                outline: none;
                width: 87px;
                cursor: pointer;
                position: absolute;
                padding: 7px 12px;
                -webkit-text-decoration: none;
                -webkit-text-decoration: none;
                text-decoration: none;
                background-color: var(--main-color) !important;
                border-radius: 6px;
                font-size: 15px;
                color: #ffffff !important;
                bottom: -35px;
                right: 10px;
            }
        }

    }
` 