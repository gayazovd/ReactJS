import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import activeTab from './activeTabReducer';
import { ACTIVE_TAB } from '../actions/actions';

configure({ adapter: new Adapter() });

describe('Test redux activeTabReducer', () => {
    it('should add new data', () => {
        const newData = { id: 1, rating: 'vote_average' };
        const action = { type: ACTIVE_TAB, tab: newData };
        const newState = activeTab({}, action);
        expect(newState).toMatchObject(newData);
    });
});
