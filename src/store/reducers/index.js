import { combineReducers } from 'redux';
import detailedProductReducer from './detailedProductReducer/detailedProductReducer';
import productCatalogReducer from './productCatalogReducer/productCatalogReducer';
import loadingReducer from './loadingReducer/loadingReducer';

const reducers = combineReducers({
    product: detailedProductReducer,
    products: productCatalogReducer,
    loading: loadingReducer,
});

export default reducers;