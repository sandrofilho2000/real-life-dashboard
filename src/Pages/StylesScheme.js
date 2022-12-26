import React, {useEffect, useState} from 'react'

export const stylesSchemes = {
    "main-bg": "#ffffff;",
    "second-bg": "#fafafb;",
    "txt-color": "#455560;",
    "txt-white": "#fff;",
    "main-color": "#349eff;",
    "second-color": "#62b4ff;",
    "box-shadow": "0px 8px 24px rgba(149, 157, 165, 0.2) ;",
    "main-bg-light": "#ffffff;",
    "second-bg-light": "#fafafb;",
    "txt-color-light": "#455560;",
    "box-shadow-light": "rgb(149, 157, 165, 0.2) 0px 8px 24px;",
    "main-bg-dark": "#2d2d2d;",
    "second-bg-dark": "#202020;",
    "txt-color-dark": "#bbbbbb;",
    "box-shadow-dark": "0px 5px 10px rgba(0, 0, 0, 0.2) ;",
    "main-color-blue": "#349eff;",
    "second-color-blue": "#62b4ff;",
    "main-color-red": "#fb0b12;",
    "second-color-red": "#ff4a6b;",
    "main-color-cyan": "#10d4d2;",
    "second-color-cyan": "#2ae9e6;",
    "main-color-green": "#019707;",
    "second-color-green": "#4caf50;",
    "main-color-orange": "#d68102;",
    "second-color-orange": "#fca11a;",
    "sidebar-width": "300px;",
    "border-radius": "15px;",
    "topnav-height": "110px;",
    "transition-cubic": "cubic-bezier(0.175, 0.885, 0.32, 1.275);",
}

export const darkLightMode = {
    "mainBg": stylesSchemes['main-bg-dark'],
    "secondBg": stylesSchemes['second-bg-dark'],
    "boxShadow": stylesSchemes['box-shadow-dark'],
    "textColor": stylesSchemes["txt-color-dark"],
}

export const lightMode = {
    "mainBg": stylesSchemes['main-bg-light'],
    "secondBg": stylesSchemes['second-bg-light'],
    "boxShadow": stylesSchemes['box-shadow-light'],
    "textColor": stylesSchemes["txt-color-light"],
}