import React from 'react';
import { product } from '../../mockData';

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

    return (
        <div>
            <img src={imageURL} alt={name} />
            <h2>{`${manufacturer} ${name} ${color}`}</h2>
            <p>Price: {price}</p>
            <p>{description}</p>
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
    )
}

export default ProductDetails;