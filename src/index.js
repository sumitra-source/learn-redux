import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'react-redux';
import allReducers from './reducers'
import {Provider} from 'react-redux'

const store=createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
{/*import {createStore} from 'redux'
//STORE-GLOBALIZED STATE
//ACTION INCREMENT
const increment=()=>{
  return{
    type:'INCREMENT'
  }
}
const decrement=()=>{
  return{
    type:'DECREMENT'
  }
}
//REDUCER
const counter=(state=0,action)=>{
  switch(action.type){
    case "INCREMENT":
      return state+1;
       case "DECREMENT":
      return state-1;
  }
};
let store=createStore(counter);
//DISPLAY IT IN THE CONSOLE
store.subscribe(()=>console.log(store.getState()));
//DISPATCH
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/}
reportWebVitals();
