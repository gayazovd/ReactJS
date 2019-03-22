import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmPreview from './index';

configure({ adapter: new Adapter() });

describe('FilmPreview component is render', () => {
  const onClick = jest.fn();
  const props = {
    onClick,
    film: {
      title: 'TITLE',
      release_date: '2019',
      poster_path: '/sasads/sds',
      genres: ['action']
    }
  };
  const filmpreview = shallow(<FilmPreview {...props} />);
  it('FilmPreview render', () => {
    expect(filmpreview.find('.date').text()).toEqual('2019');
  });
  it('onClick function is call', () => {
    const wrapper = filmpreview.find('.wrapper');
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
