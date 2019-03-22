import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from './index';

configure({ adapter: new Adapter() });

describe('component <NotFoundFilms /> is render', () => {
  const notFound = shallow(<NotFound />);
  it('<NotFound /> snapshot', () => {
    expect(notFound).toMatchSnapshot();
  });
});
