import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFoundFilms from './index';

configure({ adapter: new Adapter() });

describe('component <NotFoundFilms /> is render', () => {
  const notFound = shallow(<NotFoundFilms />);
  it('<NotFoundFilms /> snapshot', () => {
    expect(notFound).toMatchSnapshot();
  });

  it('component render', () => {
    expect(notFound.find('.error').text()).toEqual('No films found');
  });
});
