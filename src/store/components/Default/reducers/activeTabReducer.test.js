import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import activeTab from './activeTabReducer';
import { getActiveTab } from '../actions/actions';

configure({ adapter: new Adapter() });

describe('Test redux activeTabReducer', () => {
    it('should add new data', () => {
        const newData = { id: 1, rating: 'vote_average' };
        const action = getActiveTab(newData);
        const newState = activeTab({}, action);
        expect(newState).toMatchObject(newData);
    });
});
