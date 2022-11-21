import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
import { populateProduce } from './store/produce';
import { addProductCart } from './store/cart';

const store = configureStore();

if (process.env.node_ENV !== "production") {
  window.store = store;
  window.populateProduce = populateProduce;

  // only tests adding product id 1
  window.addProductCart = addProductCart(1);
}

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);