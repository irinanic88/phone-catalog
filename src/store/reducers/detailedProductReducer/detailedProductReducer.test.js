import detailedProductReducer from './detailedProductReducer';
import { LOAD_PRODUCT_DETAILS } from '../../actionTypes';

const mockState = {};

const mockActionWithLoadProductDetailsType = {
    type: LOAD_PRODUCT_DETAILS,
    data: {id: '123'},
}
const mockActionWithDifferentType = {
    type: 'SOME_TYPE',
}

const mockActionWithoutType = {};

describe('detailedProductReducer', () => {
    test('should return new array with data if action type is LOAD_PRODUCT_DETAILS', () => {
        expect(detailedProductReducer(mockState, mockActionWithLoadProductDetailsType)).toEqual({'123': {id: '123'}});
    });

    test('should return state if action type is not LOAD_PRODUCT_DETAILS', () => {
        expect(detailedProductReducer(mockState, mockActionWithDifferentType)).toEqual(mockState);
    });

    test('should return state if there is no action type', () => {
        expect(detailedProductReducer(mockState, mockActionWithoutType)).toEqual(mockState);
    });
})