import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Alert from './Alert';

Enzyme.configure({adapter: new Adapter()});

const mockStore = configureMockStore();
const store = mockStore({
    error: {
        error: {
            message: 'error message',
        }
    }
});

describe('Alert', () => {
    it('should render', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Alert />
            </Provider>
        );
        expect(wrapper.find('[data-id="alert"]').length).toBe(1);
    });
})