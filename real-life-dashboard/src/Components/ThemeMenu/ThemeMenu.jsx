import styled from 'styled-components'

export const ThemeMenuContainer = styled.div`
    position: fixed;
    right: -300px;
    top: 0;
    width: 300px;
    height: 100vh;
    padding: 20px;
    z-index: 99;
    transition: 0.3s;
    background-color: var(--main-bg);
    box-shadow: var(--box-shadow);

    &.active{
        right: 0px;
    }
`

export const ThemeMenuContainerTop = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ThemeTopH4 = styled.h4 `
    color: var(--txt-color);
`

export const ThemeTopClose = styled.span`
    color: var(--txt-color);
    cursor: pointer;
    font-size: 40px;
    transform: rotate(45deg);
    font-weight: 300;
`

export const ThemeDarkLightContainer = styled.div`
    height: 150px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const ThemeDLTextContainer = styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    align-items: center;
`

export const ThemeDLText = styled.h4`
    color: var(--txt-color);
    font-weight: 400;
`

export const ThemeDLToggle = styled.div`
    height: 40px;
    width: 70px;
    border-radius: 40px;
    background-color: var(--second-bg);
    border: 3px solid var(--txt-color);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    cursor: pointer;
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        ion-icon{
            color: var(--txt-color);
            font-size: 26px;
        }
    }
`

export const ThemeToggleBtn = styled.div`
    height: 28px;
    width: 28px;
    right: 4px;
    transition: 0.3s ease-in-out;
    background-color: var(--txt-color);
    border-radius: 50%;
    position: absolute;
    margin-right: var(--toggle-mright);
    margin-left: var(--toggle-mleft);
`

export const ThemeToggleLight = styled.div`
    left: 0;
    height: 100%;
    width: 50%;
`

export const ThemeToggleDark = styled.div`
    right: 0;
    height: 100%;
    width: 50%;
`