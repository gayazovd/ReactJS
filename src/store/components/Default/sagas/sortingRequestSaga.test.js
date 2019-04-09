import '@babel/polyfill';
import { put } from 'redux-saga/effects';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { fetchSortBy } from './sortingRequestSaga';
import { SORTING_FILMS } from '../actions/actions';

configure({ adapter: new Adapter() });

describe('test getDetailFilmSaga', () => {
    const tab = { tab: 'some' };
    const action = { payload: { tab } };
    const gen = fetchSortBy(action);
    it('works correctly ', () => {
        const data = '1';
        const derivedAction = gen.next().value;
        expect(derivedAction).toEqual(put({ type: SORTING_FILMS.PENDING, loading: true }));
        gen.next();
        gen.next({ data });
        gen.next();
        expect(gen.next().done).toEqual(true);
    });
});
