import '@babel/polyfill';
import { put, call } from 'redux-saga/effects';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { getDetailFilm } from './getDetailFilmSaga';
import { SHOW_FILM } from '../actions/actions';

configure({ adapter: new Adapter() });

describe('test getDetailFilmSaga', () => {
    const url = 'some';
    const action = { payload: { url } };
    const gen = getDetailFilm(action);
    it('works correctly ', () => {
        const data = '1';
        const derivedAction = gen.next().value;
        expect(derivedAction).toEqual(put({ type: SHOW_FILM.PENDING, loading: true }));
        gen.next();
        gen.next({ data });
        expect(gen.next().done).toEqual(true);
    });
});
