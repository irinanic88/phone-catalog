import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './components/ProductList/ProductList';
import {products} from './mockData';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ProductList products={products} />
  </React.StrictMode>,
  document.getElementById('root')
);

