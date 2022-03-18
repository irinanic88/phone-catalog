import { combineReducers } from 'redux';
import detailedProductReducer from './detailedProductReducer/detailedProductReducer';
import productCatalogReducer from './productCatalogReducer/productCatalogReducer';

const reducers = combineReducers({
    product: detailedProductReducer,
    products: productCatalogReducer,
});

export default reducers;