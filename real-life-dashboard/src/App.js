import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/home'
import Products from './Pages/products';
import Clients from './Pages/clients';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/products" component={Products} exact/>
        <Route path="/clients" component={Clients} exact/>
      </Switch>
    </Router>

  );
}

export default App;
