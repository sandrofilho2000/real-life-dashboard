export const open_theme_menu = (open_theme) =>{
    return {
        type: "OPEN_THEME_MENU",
        open_theme
    }
}

export const theme_toggle = (theme_toggle) =>{
    return {
        type: "SET_THEME_TOGGLE",
        theme_toggle
    }
}

export const color_toggle = (color_toggle) =>{
    return {
        type: "SET_COLOR_TOGGLE",
        color_toggle
    }
}