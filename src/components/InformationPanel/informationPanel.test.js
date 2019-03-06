import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InformationPanelView from './view';

configure({ adapter: new Adapter() });

describe('function onClick call',() => {
    const onClick = jest.fn(),
        props = {
            onClick,
            tabs: ['1','2'],
            activeTab: '1'
        }
            it('snapshot', () => {
                const informationPanelView = shallow(<InformationPanelView {...props}/>);
                expect(informationPanelView).toMatchSnapshot();
            })

            it('function called', () => {
                const informationPanelView = shallow(<InformationPanelView {...props}/>).find('#test');
                informationPanelView.simulate('click');
                expect(onClick).toHaveBeenCalled();
            })
})