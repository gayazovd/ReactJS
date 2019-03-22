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

  const movieList = shallow(<MovieList />);

  it('get snapshot component', () => {
    expect(movieList).toMatchSnapshot();
  });
});
