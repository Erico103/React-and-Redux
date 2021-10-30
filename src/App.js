import React from "react";
import {Provider}from 'react-redux'
import store from './redux/store'
import CakeContainer from './containers/CakeContainer'
import "./style.css";

 function App() {
  return (
    <Provider store={store}>
    <div>
     <CakeContainer />
    </div>
    </Provider>
  );
}

export default App
