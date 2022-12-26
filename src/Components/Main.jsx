import styled from "styled-components"

export const Main = styled.div`
    position: absolute;
    min-width: calc(100vw - 80px);
    left: 80px;
    min-height: 100vh;
    -webkit-transition: .3s;
    transition: .3s;
    min-height: 100vh ;
    height: 100%;
    overflow: auto;
    background-color: var(--second-bg);
    
    *{
        color: var(--txt-color);

        ::placeholder{
            user-select: none;
        }

        ::-webkit-scrollbar {
            width: 5px;
            position: absolute;
            left: -10px;
            margin-left: -10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: (--main-bg);
            margin-left: -10px;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            margin-left: -10px;
            background: var(--main-color);
            width: 5px;
            border-radius: 5px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: var(--main-color);
        }

        input[type=number]{
            ::-webkit-outer-spin-button,
            ::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
        }
    }

    img{
        user-select: none !important;
    }


    &.active{
        left: 300px;
        min-width: calc(100vw - 300px);
    }

    @media (max-width: 991px){
        &{
            width: 100vw;
            left: 0;
        }
        &.active{
            left:  300px;
        }
    }

    @media (max-width: 500px){

        &.active .toggle *{
            position: fixed;
            right: 0;
            top: 10px;
            left: initial;
            z-index: 10001;
        }
    }
`