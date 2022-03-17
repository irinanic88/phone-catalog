import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../mockData';
import { currency } from '../../utils/variables';
import styles from './ProductList.module.scss';

const ProductList = () => {

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