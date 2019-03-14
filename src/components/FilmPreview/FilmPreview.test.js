import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmPreview from './index';

configure({ adapter: new Adapter() });

describe('FilmPreview component is render', () => {
    const props = {
        film: {
            title: 'TITLE',
            release_date: '2019',
            poster_path: '/sasads/sds',
            genres: ['action']
        }
    };
    it('FilmPreview render', () => {
        const filmpreview = shallow(<FilmPreview {...props} />);
        expect(filmpreview.find('.date').text()).toEqual('2019');
    });
});
