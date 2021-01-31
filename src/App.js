import './App.scss';
import { Header } from './components';
import { Home , ProductActions} from './pages'
import { Switch , Route } from 'react-router-dom';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import 'react-alice-carousel/lib/alice-carousel.css'

function App() {

  document.onselectstart = function(){ return false; }

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