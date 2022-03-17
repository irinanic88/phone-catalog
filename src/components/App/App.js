import React from 'react';
import ProductList from '../ProductList/ProductList';
import { products } from '../../mockData';

const App = () => {
    return (
        <div>
            <h1>Phone catalog</h1>
            <ProductList products={products} />
        </div>
    )
}

export default App;