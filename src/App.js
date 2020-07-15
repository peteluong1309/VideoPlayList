import React from 'react';
// import VideoList from './Container/VideoList';
import rootReducer from './Reducer/rootReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Container/Login';
import Signup from './Container/Signup';
import Home from './Container/Home';
import BlurExample from './Container/VideoList';


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

function App() {

  return (
    <Provider store={store}>
      {/* <VideoList /> */}
      <Router>
        <Route path="/" exact component={BlurExample} />
        <Route path="/log-in" exact component={Login} />
        <Route path="/sign-up" exact component={Signup} />
      </Router>
    </Provider>
  );
}

export default App;
