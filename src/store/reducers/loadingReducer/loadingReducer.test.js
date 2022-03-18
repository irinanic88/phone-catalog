import loadingReducer from './loadingReducer';
import { REQUEST, SUCCESS, FAILURE } from '../../actionTypes';

const mockState = {loading: false};

const mockActionWithRequest = {
    fetchLoadingState: REQUEST,
}

const mockActionWithSuccess = {
    fetchLoadingState: SUCCESS,
}

const mockActionWithFailure = {
    fetchLoadingState: FAILURE,
}

const mockActionWithDifferentFetchLoadingState = {
    fetchLoadingState: null,
};

describe('loadingReducer', () => {
    test('should return "loading: true" if fetchLoadingState is REQUEST', () => {
        expect(loadingReducer(mockState, mockActionWithRequest)).toEqual({loading: true});
    });

    test('should return "loading: true" if fetchLoadingState is SUCCESS', () => {
        expect(loadingReducer(mockState, mockActionWithSuccess)).toEqual({loading: false});
    });

    test('should return "loading: true" if fetchLoadingState is FAILURE', () => {
        expect(loadingReducer(mockState, mockActionWithFailure)).toEqual({loading: false});
    });

    test('should return state with different fetchLoadingState', () => {
        expect(loadingReducer(mockState, mockActionWithDifferentFetchLoadingState)).toEqual(mockState);
    });
})