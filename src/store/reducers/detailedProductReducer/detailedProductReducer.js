import {LOAD_PRODUCT_DETAILS, SUCCESS} from '../../actionTypes';

const detailedProductReducer = (state = {}, action) => {
    const {type, data} = action;

    switch (type) {
        case LOAD_PRODUCT_DETAILS + SUCCESS:
            return {
                ...state,
                [data.id]: data,
            }
        default:
            return state;
    }
}

export default detailedProductReducer;