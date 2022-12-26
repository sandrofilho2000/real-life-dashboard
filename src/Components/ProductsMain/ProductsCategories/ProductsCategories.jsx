import styled from "styled-components";

export const ProductsCategoriesContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 30px;

    *{
        user-select: none;
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
    }

    > div{
        position: relative;
        display: flex;
        overflow: hidden;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        width: 100%;
        background-color: var(--main-bg);
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius);
    }
    
    @media (max-width: 991px){
        & {
            -ms-grid-columns: 1fr;
            grid-template-columns: 1fr;
            height: auto;
        }
    }
    
`



