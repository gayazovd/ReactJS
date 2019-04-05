import { call, put, takeLatest } from 'redux-saga/effects';
import { network } from '../../../../services/network';
import { SHOW_FILM, getFilm } from '../actions/actions';

export default function* watchDetailFilm() {
    yield takeLatest(SHOW_FILM.REQUESTED, getDetailFilm);
}

function* getDetailFilm({ payload }) {
    const { url } = payload;
    yield put({ type: SHOW_FILM.PENDING, loading: true });
    const response = yield call(() => network(url));
    const movie = response.data;
    yield put({ type: SHOW_FILM.SUCCESS, detail: movie });
}
