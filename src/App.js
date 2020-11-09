import './App.scss';
import { Header } from './components';
import { Home , ProductActions} from './pages'
import { Switch , Route } from 'react-router-dom';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import { useEffect } from 'react';
import $ from 'jquery';
function App() {


  return (
    <div className="App">
      <Header>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/products/:productId' component={ProductActions}/>
        </Switch>
      </Header>
    </div>
  );
}

export default App;