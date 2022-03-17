import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ProductDetails from './ProductDetails';

Enzyme.configure({adapter: new Adapter()});

describe('ProductDetails', () => {
    it('should render', () => {
        const wrapper = mount(<ProductDetails />);
        expect(wrapper.find('[data-id="product-details"]').length).toBe(1);
    })
})