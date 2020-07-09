import React, { useEffect } from 'react';
import Video from './Container/Video';
import rootReducer from './Reducer/rootReducer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {
  
 return(
  <Provider store={store}> 
    <Video />
  </Provider>
 );
}

export default App;
