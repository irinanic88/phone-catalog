import React from 'react';
import ProductList from '../ProductList/ProductList';
import { products } from '../../mockData';
import styles from './App.module.scss';

const App = () => {
    return (
        <>
            <h1 className={styles.app__header}>Phone catalog</h1>
            <ProductList products={products} />
        </>
    )
}

export default App;