import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ProductList from './ProductList';
import { products } from '../../mockData';

Enzyme.configure({adapter: new Adapter()});

describe('ProductList', () => {
    it('should render', () => {
        const wrapper = mount(<ProductList products={productsMock} />);
        expect(wrapper.find('[data-id="product-list"]').length).toBe(1);
    });

    it('should render a given amount of list items', () => {
        const wrapper = mount(<ProductList />);
        expect(wrapper.find('[data-id="product-list"]').children().length).toBe(products.length);
    })
})