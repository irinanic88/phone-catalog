import {
    LOAD_PRODUCT_LIST,
    LOAD_PRODUCT_DETAILS,
    REQUEST,
    SUCCESS,
    FAILURE
} from './actionTypes';
import { loadProductListURL, loadProductDetailsURL } from '../utils/variables';

export const loadProductList = () => async (dispatch) => {
    dispatch ({
        type: `${LOAD_PRODUCT_LIST}__${REQUEST}`,
        fetchLoadingState: `${REQUEST}`,
    });

    try {
        const data = await fetch(loadProductListURL).then(res => res.json());

        dispatch ({
            type: `${LOAD_PRODUCT_LIST}__${SUCCESS}`,
            fetchLoadingState: `${SUCCESS}`,
            data,
        })
    } catch (error) {
        dispatch ({
            type: `${LOAD_PRODUCT_LIST}__${FAILURE}`,
            fetchLoadingState: `${FAILURE}`,
            error,
        })
    }
}

export const loadProductDetails = (id) => async (dispatch) => {
    dispatch ({
        type: `${LOAD_PRODUCT_DETAILS}__${REQUEST}`,
        fetchLoadingState: `${REQUEST}`,
    });

    try {
        const data = await fetch(loadProductDetailsURL(id)).then(res => res.json());

        dispatch ({
            type: `${LOAD_PRODUCT_DETAILS}__${SUCCESS}`,
            fetchLoadingState: `${SUCCESS}`,
            data,
        });
    } catch (error) {
        dispatch ({
            type: `${LOAD_PRODUCT_DETAILS}__${FAILURE}`,
            fetchLoadingState: `${FAILURE}`,
            error,
        });
    }
}