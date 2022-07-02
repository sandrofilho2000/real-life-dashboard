import '../src/assets/css/index.css'
import '../src/assets/css/theme.css'
import Layout from './Components/Layout/Layout';
import { Provider } from 'react-redux';
import  store from './redux/reducers'
function App() {
  return (
    
    <Provider store={store}>
      <Layout/>
    </Provider>

  );
}

export default App;
