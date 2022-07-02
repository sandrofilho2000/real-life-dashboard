import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Routes from '../Routes';

const Layout = () => {

  return (
      <Router>
          <Switch>
              <Routes/>
          </Switch>
      </Router>
  )
}

export default Layout