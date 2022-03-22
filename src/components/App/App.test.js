import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

Enzyme.configure({adapter: new Adapter()});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)
const store = mockStore({
    loading: false,
    products: [
        {
            id: '123',
            name: 'iPhone 11 PRO',
            price: 395,
            imageURL: 'https://picsum.photos/id/101/200'
        },
        {
            id: '234',
            name: 'Pixel 4',
            price: 359,
            imageURL: 'https://picsum.photos/id/1/200'
        }
    ],
    product: {
        id: '123',
        name: "iPhone 11 PRO",
        manufacturer: "Apple",
        description: "lorem ipsum dolor sit amet consectetur.",
        color: "Black",
        price: 395,
        imageURL: 'https://picsum.photos/id/101/200',
        screen: "4,7 inch IPS",
        processor: "A10 Fusion",
        ram: 2,
    }
});

describe('App', () => {
    it('should render', () => {
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            </Provider>
        );
        expect(wrapper.find('[data-id="app"]').length).toBe(1);
    })
})