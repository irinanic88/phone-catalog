const ProductList = ({products}) => {

    const currency = '€';

    return(
        <ul>
            {products.map((product) => {
                const {id, name, price, imageURL} = product;
                return (
                    <li key={id}>
                        <img src={imageURL} alt={name}/>
                        <h2>{name}</h2>
                        <p>{`${price} ${currency}`}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default ProductList;