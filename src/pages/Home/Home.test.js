import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './index';

configure({ adapter: new Adapter() });

describe('<Home/> component testing', () => {
    const home = shallow(<Home />);
    it('component <Home /> snapshot', () => {
        expect(home).toMatchSnapshot();
    });
});
