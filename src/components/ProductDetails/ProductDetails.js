import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useActions from '../../hooks/useActions';
import { productDetailsSelector } from '../../store/selectors';
import { currency } from '../../utils/variables';
import Button from '../Button/Button';
import styles from './ProductDetails.module.scss';


const ProductDetails = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    const { loadProductDetails } = useActions();
    const product = useSelector(productDetailsSelector(productId));

    useEffect(() => {
        if (!product) {
            loadProductDetails(productId);
        }
    }, [productId]);

    if (!product) {
        return (
            <div />
        )
    }

    const {
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

    const handleBackToListClick = () => {
        navigate('/products');
    }

    return (

        <div className={styles.productDetails} data-id="product-details">
            <img src={imageURL} alt={name} className={styles.productDetails__img}/>

            <div className={styles.productDetails__info}>
                <h2 className={styles.productDetails__title}>{`${manufacturer} ${name} ${color}`}</h2>

                <p className={styles.productDetails__price}>
                    Price: <span className={styles.productDetails__price_amount}>{`${price} ${currency}`}</span>
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

                <div role="button" className={styles.productDetails__backToList}>
                    <Button name={'Back to list'} handleClick={handleBackToListClick} />
                </div>
            </div>

        </div>
    )
}

export default ProductDetails;