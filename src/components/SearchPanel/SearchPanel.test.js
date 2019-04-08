import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchPanelView from './view';

configure({ adapter: new Adapter() });

describe('component <SearchPanelView /> is render', () => {
    const onInputChange = jest.fn(),
        onClick = jest.fn(),
        props = {
            search: '',
            onInputChange,
            onClick,
            tabs: [1, 2],
            activeTab: 1
        };
    const searchPanel = shallow(<SearchPanelView {...props} />);
    it('get snapshot <SearchPanelView /> component', () => {
        expect(searchPanel).toMatchSnapshot();
    });

    it('onClick called', () => {
        const output = searchPanel.find('.search');
        output.simulate('click');
        expect(onClick).toHaveBeenCalled();
    });

    it('onInputChange called and change', () => {
        const output = searchPanel.find('.inputButton');
        output.simulate('change', {
            target: { search: 'aaaa' }
        });
        expect(onInputChange).toHaveBeenCalledWith({ target: { search: 'aaaa' } });
    });
});
