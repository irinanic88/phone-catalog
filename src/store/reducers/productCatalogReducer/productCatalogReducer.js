import { LOAD_PRODUCT_LIST } from '../../actionTypes';

const productCatalogReducer = (state = [], action) => {
    const {type, data} = action;

    switch (type) {
        case LOAD_PRODUCT_LIST:
            return [...data];

        default:
            return state;

    }
}

export default productCatalogReducer;