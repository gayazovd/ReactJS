import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ACTIVE_TAB, LOAD_FILMS, SHOW_FILM, SORTING_FILMS } from './actions';
import { getSearchingMovies, getDetailFilm, fetchBySort } from './actionCreators';

configure({ adapter: new Adapter() });

describe('Test redux actionCreators', () => {
    it('should create actions', () => {
        const search = 'some';
        const tab = 'second';
        const result = getSearchingMovies(search, tab);
        expect(result).toEqual({
            type: LOAD_FILMS.REQUESTED,
            payload: { search, tab }
        });
    });
    it('should create actions', () => {
        const url = 'some';
        const result = getDetailFilm(url);
        expect(result).toEqual({ type: SHOW_FILM.REQUESTED, payload: { url } });
    });
    it('should create actions', () => {
        const tab = 'some';
        const result = fetchBySort(tab);
        expect(result).toEqual({ type: SORTING_FILMS.REQUESTED, payload: { tab } });
    });
});
