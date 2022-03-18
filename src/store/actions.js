import {
    LOAD_PRODUCT_LIST,
    LOAD_PRODUCT_DETAILS,
    REQUEST,
    SUCCESS,
    FAILURE
} from './actionTypes';
import { loadProductListURL } from '../utils/variables';

export const loadProductList = () => async (dispatch) => {
    dispatch ({
        type: LOAD_PRODUCT_LIST + REQUEST,
        fetchLoadingState: REQUEST
    });

    try {
        const data = await fetch(loadProductListURL).then(res => res.json());

        dispatch ({
            type: LOAD_PRODUCT_LIST + SUCCESS,
            fetchLoadingState: SUCCESS,
            data,
        })
    } catch (error) {
        dispatch ({
            type: LOAD_PRODUCT_LIST + FAILURE,
            fetchLoadingState: FAILURE,
            error,
        })
    }
}




export const loadProductDetails = (id) => ({
    type: LOAD_PRODUCT_DETAILS,
    id,
});