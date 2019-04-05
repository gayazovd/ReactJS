import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import dataFromServer from './fetchReducers';
import { getSortOnTab, fetchDataServer } from '../actions/actions';

configure({ adapter: new Adapter() });

describe('Test redux fetchReducers', () => {
    it('should add new data', () => {
        const newData = [
            { id: 1, rating: 'vote_average' },
            { id: 2, rating: 'vote_average' },
            { id: 3, rating: 'vote_average' }
        ];
        const action = getSortOnTab(newData);
        const newState = dataFromServer([], action);
        expect(newState).toMatchObject(newData);
    });
    it('should add new data', () => {
        const newData = [
            { id: 1, rating: 'vote_average' },
            { id: 2, rating: 'vote_average' },
            { id: 3, rating: 'vote_average' }
        ];
        const action = fetchDataServer(newData);
        const newState = dataFromServer([], action);
        expect(newState).toMatchObject(newData);
    });
});
