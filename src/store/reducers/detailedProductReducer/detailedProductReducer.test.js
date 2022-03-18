import detailedProductReducer from './detailedProductReducer';
import { LOAD_PRODUCT_DETAILS } from '../../actionTypes';

const mockStore = {};
const mockActionWithLoadProductDetailsType = {
    type: LOAD_PRODUCT_DETAILS,
    data: {id: '123'},
}
const mockActionWithDifferentType = {
    type: 'SOME_TYPE',
}

const mockActionWithoutType = {};

describe('productCatalogReducer', () => {
    test('should return new array with data if action type is LOAD_PRODUCT_DETAILS', () => {
        expect(detailedProductReducer(mockStore, mockActionWithLoadProductDetailsType)).toEqual({'123': {id: '123'}});
    });

    test('should return store if action type is not LOAD_PRODUCT_DETAILS', () => {
        expect(detailedProductReducer(mockStore, mockActionWithDifferentType)).toEqual({});
    });

    test('should return store if there is no action type', () => {
        expect(detailedProductReducer(mockStore, mockActionWithoutType)).toEqual({});
    });
})