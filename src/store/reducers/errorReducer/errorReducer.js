import {LOAD_PRODUCT_LIST, LOAD_PRODUCT_DETAILS, FAILURE, CLOSE_ALERT} from '../../actionTypes';

const errorReducer = (state = {}, action) => {
    const { type, error } = action;
    switch (type) {
        case `${LOAD_PRODUCT_LIST}__${FAILURE}`:
            return { error };

        case `${LOAD_PRODUCT_DETAILS}__${FAILURE}`:
            return { error };

        case `${CLOSE_ALERT}`:
            return {};

        default:
            return state;
    }

}

export default errorReducer;