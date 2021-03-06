import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieListView from './view';
import MovieList from './index';

configure({ adapter: new Adapter() });

describe('MovieListView is render', () => {
    const props = {
        data: [{ id: 1 }, { id: 2 }]
    };

    const movieView = shallow(<MovieListView {...props} />);

    it('get snapshot component', () => {
        expect(movieView).toMatchSnapshot();
    });
});
