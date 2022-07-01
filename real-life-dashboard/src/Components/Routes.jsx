import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Clients from '../Pages/clients'
import Home from '../Pages/home'
import Products from '../Pages/products'

const Routes = () => {
  return (
    <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/products" component={Products} exact/>
        <Route path="/clients" component={Clients} exact/>
    </Switch>
  )
}

export default Routes