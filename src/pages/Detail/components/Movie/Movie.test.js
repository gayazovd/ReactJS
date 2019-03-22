import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmDetailView from './view';

configure({ adapter: new Adapter() });

describe('Component is render', () => {
  const props = {
    data: {
      title: 'Heroes',
      tagline: 'movie',
      vote_average: 7.7,
      release_date: '2019',
      poster_path: 'path',
      overview: 'asas',
      runtime: '120'
    }
  };
  const filmView = shallow(<FilmDetailView {...props} />);

  it('<FilmDetail /> snapshot', () => {
    expect(filmView).toMatchSnapshot();
  });

  it('detail component is correct', () => {
    expect(filmView.find('.title').text()).toEqual(props.data.title);
  });
});
