import {LOAD_PRODUCT_LIST, LOAD_PRODUCT_DETAILS, FAILURE, SUCCESS} from '../../actionTypes';

const errorReducer = (state = {}, action) => {
    const { type, error } = action;
    switch (type) {
        case `${LOAD_PRODUCT_LIST}__${FAILURE}`:
            return { error };

        case `${LOAD_PRODUCT_DETAILS}__${FAILURE}`:
            return { error };

        default:
            return state;
    }

}

export default errorReducer;