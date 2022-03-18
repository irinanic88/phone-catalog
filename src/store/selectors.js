export const productsSelector = (state) => state.products;
export const productDetailsSelector = (id) => (state) => state.product[id];
export const loadingSelector = (state) => state.loading.loading;