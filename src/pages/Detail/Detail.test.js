import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Detail from '../../pages/Detail';

configure({ adapter: new Adapter() });

describe('<Detail/> component testing', () => {
  const detail = shallow(<Detail />);
  it('component <Detail /> snapshot', () => {
    expect(detail).toMatchSnapshot();
  });
});
