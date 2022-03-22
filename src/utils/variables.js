export const currency = '€';

const HOST = 'https://secret-meadow-52167.herokuapp.com';
export const loadProductListURL = `${HOST}/products`;
export const loadProductDetailsURL = (id) => `${HOST}/products/${id}`;