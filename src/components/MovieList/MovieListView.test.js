import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieListView from './view';
import MovieList from './index';

configure({ adapter: new Adapter() });

describe('MovieListView is render', () => {
  const onHandleClick = jest.fn();
  const props = {
    data: [{ id: 1 }, { id: 2 }],
    onHandleClick
  };

  const movieView = shallow(<MovieListView {...props} />);

  it('get snapshot component', () => {
    expect(movieView).toMatchSnapshot();
  });

  it('component <MovieListView/> is render', () => {
    const element = movieView.find('FilmPreview').at(1);
    element.simulate('click');
    expect(onHandleClick).toHaveBeenCalled();
  });
});
