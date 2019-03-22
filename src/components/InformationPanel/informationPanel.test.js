import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InformationPanelView from './view';

configure({ adapter: new Adapter() });

describe('function onClick call', () => {
  const onHandleClick = jest.fn();
  const props = {
    onHandleClick,
    tabs: [{ id: 1 }, { id: 2 }],
    activeTab: '1'
  };
  it('snapshot', () => {
    const informationPanelView = shallow(<InformationPanelView {...props} />);
    expect(informationPanelView).toMatchSnapshot();
  });

  it('function called', () => {
    const informationPanelView = shallow(<InformationPanelView {...props} />)
      .find('.activeTab')
      .at(1);
    informationPanelView.simulate('click');
    expect(onHandleClick).toHaveBeenCalledTimes(1);
  });
});
