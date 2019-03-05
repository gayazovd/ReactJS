import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './index';

configure({ adapter: new Adapter() });


describe('Header component is render', () => {
    const props = {
        children: <div className='one'>Hello World!</div>
    }

    it('Header render', () => {
        const header = shallow(<Header {...props} />)
        expect(header.find('.one').text()).toEqual('Hello World!')
    })
})