import { call, put, takeEvery } from 'redux-saga/effects';
import network from '../../../../services/network';
import { LOAD_FILMS } from '../actions/actions';

export default function* watcherSaga() {
    yield takeEvery(LOAD_FILMS.REQUESTED, searchRequest);
}

export function* searchRequest({ payload }) {
    const { search, tab } = payload;
    const url = createUrl(search, tab);
    yield put({ type: LOAD_FILMS.PENDING, loading: true });
    const response = yield call(() => network(url));
    const movies = response.data.data;
    yield put({ type: LOAD_FILMS.SUCCESS, movies });
}

const createUrl = (search, tab) => {
    return `/movies?search=${search}&searchBy=${tab}`;
};
