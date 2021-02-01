import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider  } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware , createStore , compose } from 'redux';
import rootReducer from './redux/reducers';


const store = createStore(rootReducer , compose(
  applyMiddleware(thunk)
));

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);
