import { LOAD_PRODUCT_DETAILS } from '../../actionTypes';

const detailedProductReducer = (store = {}, action) => {
    const {type, data} = action;

    switch (type) {
        case LOAD_PRODUCT_DETAILS:
            return {
                ...store,
                [data.id]: data,
            }
        default:
            return store;
    }
}

export default detailedProductReducer;