import { LOAD_PRODUCT_LIST, LOAD_PRODUCT_DETAILS } from './actionTypes';

export const loadProductList = () => ({
    type: LOAD_PRODUCT_LIST,
});

export const loadProductDetails = (id) => ({
    type: LOAD_PRODUCT_DETAILS,
    id,
});