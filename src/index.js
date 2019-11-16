import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import {AppMain} from './App';
//import registerServiceWorker from './registerServiceWorker';
//import * as serviceWorker from './registerServiceWorker';
let initStore = {
     energy: 1,
     minerals: 1,
     food: 1,
     alloys: 1,
     factories: 1,
     workers: 1,
     day: 1,
     message: "",
     board: {
          a1: 0,
          a2: 0,
          a3: 0,
          b1: 0,
          b2: 0,
          b3: 0,
          c1: 0,
          c2: 0,
          c3: 0
     },
     board_weights: {
          a1: 0.8,
          a2: 1.2,
          a3: 1.0,
          b1: 0.5,
          b2: 1.5,
          b3: 1,
          c1: 1.2,
          c2: 0.9,
          c3: 1.0
     },
     info_display: 'info',
}
const store = configureStore(initStore)
window.store = store
window.React = React

ReactDOM.render(
     <Provider store={store}>
          <AppMain />
     </Provider>,
     document.getElementById('root')
);

//registerServiceWorker()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
