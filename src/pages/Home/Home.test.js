import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './index';

configure({ adapter: new Adapter() });

describe('<Home/> component testing',() => {
    const home = shallow(<Home />)
    it('component <Home /> snapshot',() => {
        expect(home).toMatchSnapshot();
    });

    it('component is render', () => {
        expect(home.find("Header")).toHaveLength(1);
        expect(home.find("SearchPanel")).toHaveLength(1);
        expect(home.find("InformationPanel")).toHaveLength(1);
        expect(home.find("MovieList")).toHaveLength(1);
        expect(home.find("Footer")).toHaveLength(1);
    })
})