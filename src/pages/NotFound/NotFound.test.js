import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from './index';

configure({ adapter: new Adapter() });

describe('component <NotFoundFilms /> is render', () => {
    const notFound = shallow(<NotFound />);
    it('<NotFound /> snapshot',() => {
        expect(notFound).toMatchSnapshot();
    })
    it('component render',() => {
        expect(notFound.find("Header")).toHaveLength(1);
        expect(notFound.find("SearchPanel")).toHaveLength(1);
        expect(notFound.find("InformationPanel")).toHaveLength(1);
        expect(notFound.find("NotFoundFilms")).toHaveLength(1);
        expect(notFound.find("Footer")).toHaveLength(1);
    })
})