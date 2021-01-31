import './App.scss';
import { Header } from './components';
import { useEffect } from 'react';
import { Home , ProductActions} from './pages'
import { Switch , Route } from 'react-router-dom';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import 'react-alice-carousel/lib/alice-carousel.css'
import { useSelector , useDispatch } from 'react-redux';
import { UIActions } from './redux/actions';

function App() {

  const dispatch = useDispatch();
  const { brands } = useSelector(({ ui }) => (ui))

  useEffect(()=>{
      dispatch(UIActions.getBrands());
  },[])

  useEffect(()=>{
      brands.list.forEach( async (brand) => {
          const res = await dispatch(UIActions.getCarModels(brand.id));
          dispatch(UIActions.setBrandCars({ id : brand.id , cars : res.payload }))
      })
  },[brands])

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