import styled from "styled-components";

export const EditCategoryContainer = styled.div`
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

    > div.editCategoryWrapper{
        height: 430px;
        width: 400px;
        background-color: var(--main-bg);
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius);
        padding: 20px;

        .catWrapperTop{
            height: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            line-height: 30px;
            position: relative;

            .closeCat{
                height: 30px;
                width: 30px;
                font-size: 30px;
                transform: rotate(45deg);
                line-height: 50px;
                cursor: pointer;
                margin-right: -13px;
            }
        }

        .catWrapperPic{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 30px;
            input{
                display: none;
            }
            img{
                height: 150px;
                width: 150px;
                border-radius: 50%;
                object-fit: cover;
                cursor: pointer;
            }
        }

        .catWrapperName{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 40px;
            input{
                background-color: transparent;
                border: none;
                font-size: 17px;
                color: var(--txt-color);
                border-bottom: 1px solid var(--main-color);
                width: 70%;
                padding-bottom: 5px;
                &::placeholder{
                    color: var(--txt-color)
                }
            }
        }

        .catWrapperSubmit{
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 75px;

            input{
                border: none;
                outline: none;
                cursor: pointer;
                position: relative;
                padding: 7px 12px;
                text-decoration: none;
                background-color: var(--main-color) !important;
                border-radius: 6px;
                font-size: 15px;
                color: #ffffff !important;

                &:first-of-type{
                    background-color: #fb0b12 !important;
                }
            }
        }
    }
`