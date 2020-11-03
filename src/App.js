import './App.scss';
import { Header } from './components';
import { Home } from './pages'
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';

function App() {


  return (
    <div className="App">
      <Header>
        <Home/>
      </Header>
    </div>
  );
}

export default App;