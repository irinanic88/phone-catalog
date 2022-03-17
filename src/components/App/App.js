import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from '../ProductList/ProductList';
import ProductDetails from '../ProductDetails/ProductDetails';
import styles from './App.module.scss';

const App = () => {
    return (
        <div data-id="app" className={styles.app}>
            <h1 className={styles.app__header}>Phone catalog</h1>

            <Routes>
                <Route index element={<ProductList />}/>
                <Route path="products">
                    <Route index element={<ProductList />}/>
                    <Route path=":productId" element={<ProductDetails/>}/>
                </Route>
            </Routes>

        </div>
    )
}

export default App;