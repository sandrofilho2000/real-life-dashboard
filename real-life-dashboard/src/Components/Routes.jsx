import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Clients from '../Pages/clients'
import Home from '../Pages/home'
import Products from '../Pages/products'

const Routes = () => {
  const data = useSelector(state=>state)
  const currThemeMode = data['currTheme']
  const themesList = data['themesList']
  const[themeNameTgl, setThemeNameTgl] = useState()

  useEffect(()=>{
      /* SET THEME MODE */
      const theme_toggle_ls = localStorage.getItem("themeToggle")
      if(theme_toggle_ls !== undefined && theme_toggle_ls !== null) setThemeNameTgl(theme_toggle_ls)
      else setThemeNameTgl(currThemeMode)
  })

  return (
    <div className={`${themeNameTgl}`}>
      <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/products" component={Products} exact/>
          <Route path="/clients" component={Clients} exact/>
      </Switch>
    </div>
  )
}

export default Routes