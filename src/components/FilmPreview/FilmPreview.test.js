import React from 'react';
import { shallow, configure } from 'enzyme';
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
    const filmpreview = shallow(<FilmPreview {...props} />);
    it('FilmPreview render', () => {
        expect(filmpreview).toMatchSnapshot();
    });
});
