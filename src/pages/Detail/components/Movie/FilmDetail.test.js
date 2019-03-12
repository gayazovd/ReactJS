import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmDetail from './index';
import { network } from '../../../../services/network';

configure({ adapter: new Adapter() });


describe('test <FilmDetail /> component', () => {
    let component;
    beforeEach(() => {
        component = shallow(<FilmDetail />);
    })

    it('<FilmDetail /> snapshot',() => {
        expect(component).toMatchSnapshot();
    }) 
    
})