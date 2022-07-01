import { legacy_createStore as createStore } from "redux";

const INITIAL_STATE = {
    'menuToggle': true
}

const menuToggle = (state = INITIAL_STATE, actions) =>{
    if(actions.type == 'SET_MENU_TOGGLE'){
        return { ...state, data: actions.toggle }
    }
}

const store = createStore(menuToggle)


export default store