import { all } from 'redux-saga/effects';
import watcherSaga from './searchRequestSaga';
import watchDetailFilm from './getDetailFilmSaga';
import watchSortBy from './sortingRequestSaga';

export default function* rootSaga() {
    yield all([watcherSaga(), watchDetailFilm(), watchSortBy()]);
}
