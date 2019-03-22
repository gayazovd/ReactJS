import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import activeFilm from './activeReducer';
import { getFilm } from '../actions/actions';

configure({ adapter: new Adapter() });

describe('Test redux activeReducer', () => {
  it('should add new data', () => {
    const newData = { title: 'title', vote_average: 8 };
    const action = getFilm(newData);
    const newState = activeFilm({}, action);
    expect(newState).toMatchObject(newData);
  });
});
