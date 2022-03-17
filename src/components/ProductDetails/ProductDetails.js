import React from 'react';
import { useParams } from 'react-router-dom';
import { product } from '../../mockData';
import { currency } from '../../utils/variables';
import styles from './ProductDetails.module.scss';

const ProductDetails = () => {
    const {
        id,
        name,
        manufacturer,
        description,
        color,
        price,
        imageURL,
        screen,
        processor,
        ram
    } = product;

    const { productId } = useParams();
    console.log(productId);

    return (
        <div className={styles.productDetails} data-id="product-details">
            <img src={imageURL} alt={name} className={styles.productDetails__img}/>

            <div className={styles.productDetails__info}>
                <h2 className={styles.productDetails__title}>{`${manufacturer} ${name} ${color}`}</h2>

                <p>
                    Price: <span className={styles.productDetails__price}>{`${price} ${currency}`}</span>
                </p>

                <p className={styles.productDetails__description}>{description}</p>

                <>
                    <table>
                        <tbody>
                        <tr>
                            <td>Model name</td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td>Brand</td>
                            <td>{manufacturer}</td>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>{color}</td>
                        </tr>
                        <tr>
                            <td>Screen</td>
                            <td>{screen}</td>
                        </tr>
                        <tr>
                            <td>Processor</td>
                            <td>{processor}</td>
                        </tr>
                        <tr>
                            <td>RAM</td>
                            <td>{ram}</td>
                        </tr>
                        </tbody>
                    </table>
                </>
            </div>

        </div>
    )
}

export default ProductDetails;