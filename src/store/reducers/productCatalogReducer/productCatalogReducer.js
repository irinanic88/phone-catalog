import { LOAD_PRODUCT_LIST, SUCCESS, FAILURE } from '../../actionTypes';

const productCatalogReducer = (state = [], action) => {
    const {type, data, error} = action;

    switch (type) {
        case LOAD_PRODUCT_LIST + SUCCESS:
            return [...data];

        case LOAD_PRODUCT_LIST + FAILURE:
            return state;

        default:
            return state;

    }
}

export default productCatalogReducer;