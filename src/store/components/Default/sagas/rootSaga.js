import { all } from 'redux-saga/effects';
import watcherSaga from './searchRequestSaga';
import watchDetailFilm from './getDetailFilmSaga';

export default function* rootSaga() {
  yield all([watcherSaga(), watchDetailFilm()]);
}
