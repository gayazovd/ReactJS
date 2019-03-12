import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Footer is render',() => {
    const footer = shallow(<Footer />);
    it('Footer snapshot', () => {
        expect(footer).toMatchSnapshot();
    })

    it('render Footer',() => {
        expect(footer.find('.logo').text()).toEqual('netflixroullete');
    })
})