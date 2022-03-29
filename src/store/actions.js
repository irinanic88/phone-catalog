import {
    LOAD_PRODUCT_LIST,
    LOAD_PRODUCT_DETAILS,
    REQUEST,
    SUCCESS,
    FAILURE,
    CLOSE_ALERT
} from './actionTypes';
import { loadProductListURL, loadProductDetailsURL } from '../utils/variables';

export const loadProductList = () => async (dispatch) => {
    dispatch ({
        type: `${LOAD_PRODUCT_LIST}__${REQUEST}`,
        fetchLoadingState: `${REQUEST}`,
    });

    try {
        const data = await fetch(loadProductListURL).then(res => {
            if (res.status < 300) {
                return res.json();
            } else {
                throw new Error('Cannot load product list');
            }
        }).catch(() => {
            throw new Error('Cannot load product list. Please, verify your internet connection');
        });

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
        const data = await fetch(loadProductDetailsURL(id)).then(res => {
            if (res.status < 300) {
                return res.json();
            } else {
                throw new Error('Product is not found');
            }
        });

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

export const closeAlert = () => ({
    type: `${CLOSE_ALERT}`,
});