import { combineReducers } from 'redux';
import detailedProductReducer from './detailedProductReducer/detailedProductReducer';
import productCatalogReducer from './productCatalogReducer/productCatalogReducer';
import loadingReducer from './loadingReducer/loadingReducer';
import errorReducer from './errorReducer/errorReducer';

const reducers = combineReducers({
    product: detailedProductReducer,
    products: productCatalogReducer,
    loading: loadingReducer,
    error: errorReducer,
});

export default reducers;