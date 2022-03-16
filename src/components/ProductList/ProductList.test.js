import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ProductList from './ProductList';

Enzyme.configure({adapter: new Adapter()});

const productsMock = [
    {
        id: '123',
        name: 'iPhone7',
        price: 850,
        imageURL: 'https://picsum.photos/id/101/200'
    },
    {
        id: '234',
        name: 'iPhone8',
        price: 730,
        imageURL: 'https://picsum.photos/id/1/200'
    },
]


describe('ProductList', () => {
    it('should render', () => {
        const wrapper = mount(<ProductList products={productsMock} />);
        expect(wrapper.find('ul').length).toBe(1);
    });

    it('should render a given amount of list items', () => {
        const wrapper = mount(<ProductList products={productsMock} />);
        expect(wrapper.find('li').length).toBe(productsMock.length);
    })
})