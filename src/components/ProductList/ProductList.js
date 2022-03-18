import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { currency } from '../../utils/variables';
import { loadProductList } from '../../store/actions';
import styles from './ProductList.module.scss';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    useEffect(() => {
        dispatch (loadProductList());
    }, []);

    return(
        <div>
            <ul className={styles.productList} data-id="product-list">

                {products.map((product) => {
                    const {id, name, price, imageURL} = product;

                    return (
                        <li key={id} className={styles.productList__item}>
                            <Link to={`/products/${id}`} className={styles.productList__link}>
                                <img src={imageURL} alt={name} className={styles.productList__img}/>
                                <div className={styles.productList__info}>
                                    <h2 className={styles.productList__name}>{name}</h2>
                                    <p className={styles.productList__price}>{`${price} ${currency}`}</p>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>

    )
}

export default ProductList;