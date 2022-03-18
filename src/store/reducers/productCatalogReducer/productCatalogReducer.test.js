import productCatalogReducer from './productCatalogReducer';
import { LOAD_PRODUCT_LIST, SUCCESS, FAILURE } from '../../actionTypes';

const mockState = [];

const mockActionWithSuccessType = {
    type: LOAD_PRODUCT_LIST + SUCCESS,
    data: [1, 2, 3],
}

const mockActionWithFailureType = {
    type: LOAD_PRODUCT_LIST + FAILURE,
}

const mockActionWithDifferentType = {
    type: 'SOME_TYPE',
}

const mockActionWithoutType = {};

describe('productCatalogReducer', () => {
    test('should return new array with data if action type is LOAD_PRODUCT_LIST + SUCCESS', () => {
        expect(productCatalogReducer(mockState, mockActionWithSuccessType)).toEqual([1, 2, 3]);
    });

    test('should return state if action type is is LOAD_PRODUCT_LIST + FAILURE', () => {
        expect(productCatalogReducer(mockState, mockActionWithFailureType)).toEqual(mockState);
    });

    test('should return state if action type is not LOAD_PRODUCT_LIST', () => {
        expect(productCatalogReducer(mockState, mockActionWithDifferentType)).toEqual(mockState);
    });

    test('should return state if there is no action type', () => {
        expect(productCatalogReducer(mockState, mockActionWithoutType)).toEqual(mockState);
    });
})