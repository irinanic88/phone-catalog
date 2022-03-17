import { LOAD_PRODUCT_LIST } from '../actionTypes';

const productCatalogReducer = (store = [], action) => {
    const {type, data} = action;

    switch (type) {
        case LOAD_PRODUCT_LIST:
            return [...data];

        default:
            return store;

    }
}

export default productCatalogReducer;