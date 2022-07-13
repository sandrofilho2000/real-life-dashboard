import { legacy_createStore as createStore } from "redux";


const INITIAL_STATE = {
    'menuToggle': true,
    'themeOpen': false,
    'currTheme': 'theme-mode-dark',
    'currColor': 'cyan'
}

export const dashReducers = (state = INITIAL_STATE, actions) =>{
    switch(actions.type){
        case "SET_MENU_TOGGLE":
            return { ...state, data_menu: actions.toggle }
        
        case "SET_THEME_TOGGLE":
            return { ...state, data: actions.theme}
        
        case "SET_COLOR_TOGGLE":
            return { ...state, data: actions.color}

        case "OPEN_THEME_MENU":
            return { ...state, data_theme_open: actions.open_theme}

        default:
            return { ...state }
    }

}

const store = createStore(dashReducers)

export default store