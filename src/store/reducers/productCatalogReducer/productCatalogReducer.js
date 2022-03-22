import { LOAD_PRODUCT_LIST, SUCCESS, FAILURE } from '../../actionTypes';

const productCatalogReducer = (state = [], action) => {
    const {type, data} = action;

    switch (type) {
        case `${LOAD_PRODUCT_LIST}__${SUCCESS}`:
            return [...data];

        case `${LOAD_PRODUCT_LIST}__${FAILURE}`:
            return state;

        default:
            return state;

    }
}

export default productCatalogReducer;