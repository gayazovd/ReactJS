import { call, put, takeLatest } from 'redux-saga/effects';
import { network } from '../../../../services/network';
import { FETCH_REQUEST, fetchDataServer } from '../actions/actions';

export default function* watcherSaga() {
  yield takeLatest(FETCH_REQUEST, searchRequest);
}

function* searchRequest({ payload }) {
  const { search, tab } = payload;
  const url = createUrl(search, tab);
  const response = yield call(() => network(url));
  const movies = response.data.data;
  yield put(fetchDataServer(movies));
}

const createUrl = (search, tab) => {
  return `/movies?search=${search}&searchBy=${tab}`;
};
