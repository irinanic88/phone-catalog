import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import ProductList from '../ProductList/ProductList';
import ProductDetails from '../ProductDetails/ProductDetails';
import { loadingSelector, errorSelector } from '../../store/selectors';
import styles from './App.module.scss';

import Loader from '../Loader/Loader';
import Alert from '../Alert/Alert';

const App = () => {
    const isLoading = useSelector(loadingSelector);
    const error = useSelector(errorSelector);

    return (
        <div data-id="app" className={styles.app}>
            <header>
                <h1 className={styles.app__header}>Phone catalog</h1>
            </header>
            <main>
                { isLoading && <Loader /> }
                { error.hasOwnProperty('error') && <Alert message={error.error.message} /> }

                <Routes>
                    <Route index element={<ProductList />}/>
                    <Route path="products">
                        <Route index element={<ProductList />}/>
                        <Route path=":productId" element={<ProductDetails />}/>
                    </Route>
                </Routes>

            </main>
        </div>
    )
}

export default App;