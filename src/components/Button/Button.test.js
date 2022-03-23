import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Button from './Button';

Enzyme.configure({adapter: new Adapter()});

const mockHandleClick = jest.fn();
const mockButtonName = 'buttonName';

describe('Button', () => {
    it('should render', () => {
        const wrapper = shallow(<Button name={mockButtonName} handleClick={mockHandleClick} />);
        expect(wrapper.find('[data-id="button"]').length).toBe(1);
    });

    it('should have given name test', () => {
        const wrapper = shallow(<Button name={mockButtonName} handleClick={mockHandleClick} />);
        expect(wrapper.find('[data-id="button"]').text()).toEqual(mockButtonName);
    });

    it('should perform handleClick function when is clicked', () => {
        const wrapper = shallow(<Button name={mockButtonName} handleClick={mockHandleClick} />);
        wrapper.find('[data-id="button"]').simulate('click');
        expect(mockHandleClick.mock.calls.length).toEqual(1);
    });
})