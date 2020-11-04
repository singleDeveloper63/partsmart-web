import './App.scss';
import { Header } from './components';
import { Home } from './pages'
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import { useEffect } from 'react';
import $ from 'jquery';
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