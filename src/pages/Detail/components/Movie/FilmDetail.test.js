import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmDetail from './index';


configure({ adapter: new Adapter() });

describe('test <FilmDetail /> component', () => {
    const spy = jest.spyOn(FilmDetail.prototype, 'componentDidMount');

    it('function componentDidMount call', () => {
        const component = shallow(<FilmDetail />);
        expect(spy).toHaveBeenCalledTimes(1);
    })
})