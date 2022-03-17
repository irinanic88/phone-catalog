import { combineReducers } from 'redux';
import detailedProductReducer from './detailedProductReducer';
import productCatalogReducer from './productCatalogReducer';

const reducers = combineReducers({
    product: detailedProductReducer,
    products: productCatalogReducer,
});

export default reducers;