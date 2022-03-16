import React from "react";
import styles from './ProductList.module.scss';

const ProductList = ({products}) => {

    const currency = '€';

    return(
        <ul className={styles.productList}>

            {products.map((product) => {
                const {id, name, price, imageURL} = product;

                return (
                    <li key={id} className={styles.productList__item}>
                        <img src={imageURL} alt={name} className={styles.productList__img}/>
                        <div className={styles.productList__info}>
                            <h2 className={styles.productList__name}>{name}</h2>
                            <p className={styles.productList__price}>{`${price} ${currency}`}</p>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default ProductList;