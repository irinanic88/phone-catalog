import productCatalogReducer from './productCatalogReducer';
import { LOAD_PRODUCT_LIST } from '../../actionTypes';

const mockState = [];

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
        expect(productCatalogReducer(mockState, mockActionWithLoadProductListType)).toEqual([1, 2, 3]);
    });

    test('should return state if action type is not LOAD_PRODUCT_LIST', () => {
        expect(productCatalogReducer(mockState, mockActionWithDifferentType)).toEqual(mockState);
    });

    test('should return state if there is no action type', () => {
        expect(productCatalogReducer(mockState, mockActionWithoutType)).toEqual(mockState);
    });
})