import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmDetail from './index';

configure({ adapter: new Adapter() });

describe('test <FilmDetail /> component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<FilmDetail />);
  });

  it('<FilmDetail /> snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
