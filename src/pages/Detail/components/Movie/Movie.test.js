import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmDetail from './index';
import FilmDetailView from './view';
import Detail from '../../index';
configure({ adapter: new Adapter() });

describe('Component is render',() => {
    const props = {
        data: {
            title: 'Heroes',
            tagline: 'movie',
            vote_average: '7.7',
            release_date: '2019',
            poster_path: 'path',
            overview: 'asas',
            runtime: '120'
        }
    };
    const filmDetail = shallow(<FilmDetail />);
    const filmView = shallow(<FilmDetailView {...props} />);
    
    it('<FilmDetail /> snapshot',() => {
        expect(filmDetail).toMatchSnapshot();
    });

    it('<FilmDetail /> snapshot',() => {
        expect(filmView).toMatchSnapshot();
    });

    it('FilmDetailView is render',() => {
        expect(filmDetail.find('FilmDetailView')).toHaveLength(1);
    });

    it('detail component is correct',() => {
        expect(filmView.find('.title').text()).toEqual(props.data.title);
    })

})

