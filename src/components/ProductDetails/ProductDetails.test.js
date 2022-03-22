import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ProductDetails from './ProductDetails';
import {MemoryRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

Enzyme.configure({adapter: new Adapter()});

const rrd = require('react-router-dom');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)
const store = mockStore({
    product: {
        '123': {
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
    }
});

jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');

    return {
        __esModule: true,
        ...originalModule,
        useParams: jest.fn(),
    };
});

describe('ProductDetails', () => {
    it('should render', () => {
        jest.spyOn(rrd, 'useParams').mockReturnValue({ productId: '123' });
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <ProductDetails />
                </MemoryRouter>
            </Provider>
        );
        expect(wrapper.find('[data-id="product-details"]').length).toBe(1);
    })
})