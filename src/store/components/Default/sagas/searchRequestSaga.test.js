import '@babel/polyfill';
import { put } from 'redux-saga/effects';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { searchRequest } from './searchRequestSaga';
import { LOAD_FILMS } from '../actions/actions';

configure({ adapter: new Adapter() });

describe('test searchRequestSaga', () => {
    const search = 'search';
    const tab = 'tab';
    const action = { payload: { search, tab } };
    const gen = searchRequest(action);

    it('works correctly', () => {
        const data = '1';
        const derivedAction = gen.next().value;
        expect(derivedAction).toEqual(put({ type: LOAD_FILMS.PENDING, loading: true }));
        gen.next();
        gen.next({ data });
        expect(gen.next().done).toEqual(true);
    });
});
