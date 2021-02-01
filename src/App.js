import './App.scss';
import { Header } from './components';
import { useEffect , Suspense , lazy } from 'react';
import { Switch , Route } from 'react-router-dom';
import { FullLoad } from './components';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import 'react-alice-carousel/lib/alice-carousel.css'
import { useSelector , useDispatch } from 'react-redux';
import { UIActions } from './redux/actions';

const Home = lazy(()=>import('./pages/home/home'));
const ProductActions = lazy(()=>import('./pages/productActions/porductActions'));
const Products = lazy(()=>import('./pages/products/products'));

function App() {

  const dispatch = useDispatch();
  const { brands } = useSelector(({ ui }) => (ui))

  useEffect(()=>{
      dispatch(UIActions.getBrands());
      dispatch(UIActions.getCategoris());
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
        <Suspense fallback={ <FullLoad/> }>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/products/:productId' component={ProductActions}/>
              <Route exact path='/products' component={ Products }/>
            </Switch>
        </Suspense>
          </Header>
    </div>
  );
}

export default App;