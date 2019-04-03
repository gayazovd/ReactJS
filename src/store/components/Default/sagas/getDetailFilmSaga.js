import { call, put, takeLatest } from 'redux-saga/effects';
import { network } from '../../../../services/network';
import { SHOW_FILM, getFilm } from '../actions/actions';

export default function* watchDetailFilm() {
  yield takeLatest(SHOW_FILM, getDetailFilm);
}

function* getDetailFilm({ payload }) {
  const { url } = payload;
  const response = yield call(() => network(url));
  const movie = response.data;
  yield put(getFilm(movie));
}
