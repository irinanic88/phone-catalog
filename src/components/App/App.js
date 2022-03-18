import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import ProductList from '../ProductList/ProductList';
import ProductDetails from '../ProductDetails/ProductDetails';
import { loadingSelector } from '../../store/selectors';
import styles from './App.module.scss';

import Loader from '../Loader/Loader';

const App = () => {
    const isLoading = useSelector(loadingSelector);

    return (
        <div data-id="app" className={styles.app}>
            <h1 className={styles.app__header}>Phone catalog</h1>

            { isLoading && <Loader /> }

            <Routes>
                <Route index element={<ProductList />}/>
                <Route path="products">
                    <Route index element={<ProductList />}/>
                    <Route path=":productId" element={<ProductDetails />}/>
                </Route>
            </Routes>

        </div>
    )
}

export default App;