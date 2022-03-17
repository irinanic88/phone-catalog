import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

Enzyme.configure({adapter: new Adapter()});

describe('App', () => {
    it('should render', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('[data-id="app"]').length).toBe(1);
    })
})