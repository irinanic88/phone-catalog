export const currency = '€';

const HOST = 'http://localhost:8080'
export const loadProductListURL = `${HOST}/products`;
export const loadProductDetailsURL = (id) => `${HOST}/products/${id}`;