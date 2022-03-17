import React from 'react';
import ProductList from '../ProductList/ProductList';
import ProductDetails from '../ProductDetails/ProductDetails';
import styles from './App.module.scss';

const App = () => {
    return (
        <div data-id="app" className={styles.app}>
            <h1 className={styles.app__header}>Phone catalog</h1>
            <ProductDetails />
        </div>
    )
}

export default App;