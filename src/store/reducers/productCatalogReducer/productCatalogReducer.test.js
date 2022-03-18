import productCatalogReducer from './productCatalogReducer';
import { LOAD_PRODUCT_LIST } from '../../actionTypes';

const mockStore = [];
const mockActionWithLoadProductListType = {
    type: LOAD_PRODUCT_LIST,
    data: [1, 2, 3],
}
const mockActionWithDifferentType = {
    type: 'SOME_TYPE',
}

const mockActionWithoutType = {};

describe('productCatalogReducer', () => {
    test('should return new array with data if action type is LOAD_PRODUCT_LIST', () => {
        expect(productCatalogReducer(mockStore, mockActionWithLoadProductListType)).toEqual([1, 2, 3]);
    });

    test('should return store if action type is not LOAD_PRODUCT_LIST', () => {
        expect(productCatalogReducer(mockStore, mockActionWithDifferentType)).toEqual([]);
    });

    test('should return store if there is no action type', () => {
        expect(productCatalogReducer(mockStore, mockActionWithoutType)).toEqual([]);
    });
})