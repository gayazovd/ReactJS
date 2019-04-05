import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
    getSortOnTab,
    getFilm,
    getActiveTab,
    fetchDataServer,
    FETCH_REQUEST_TO_SERVER,
    SHOW_FILM_DETAIL,
    SORTING_TAB,
    ACTIVE_TAB
} from './actions';

configure({ adapter: new Adapter() });

describe('Test redux actionCreators', () => {
    it('should create actions', () => {
        const ecpectedPayload = 'some';
        const result = getSortOnTab(ecpectedPayload);
        expect(result).toEqual({ type: SORTING_TAB, movies: ecpectedPayload });
    });
    it('should create actions', () => {
        const expectedPayload = 'some';
        const result = getFilm(expectedPayload);
        expect(result).toEqual({ type: SHOW_FILM_DETAIL, payload: expectedPayload });
    });
    it('should create actions', () => {
        const expectedPayload = 'some';
        const result = getActiveTab(expectedPayload);
        expect(result).toEqual({ type: ACTIVE_TAB, tab: expectedPayload });
    });
    it('should create actions', () => {
        const expectedPayload = 'some';
        const result = fetchDataServer(expectedPayload);
        expect(result).toEqual({ type: FETCH_REQUEST_TO_SERVER, movies: expectedPayload });
    });
});
