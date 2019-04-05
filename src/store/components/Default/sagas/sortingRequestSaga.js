import { call, put, takeLatest } from 'redux-saga/effects';
import { network } from '../../../../services/network';
import { SORTING_FILMS, ACTIVE_TAB } from '../actions/actions';

export default function* watchSortBy() {
    yield takeLatest(SORTING_FILMS.REQUESTED, fetchSortBy);
}

function* fetchSortBy({ payload }) {
    const { tab } = payload;
    const url = createUrl(tab);
    const activeTabChange = changeTabSortOrder(tab);
    yield put({ type: SORTING_FILMS.PENDING, loading: true });
    const response = yield call(() => network(`/movies/${url}`));
    const movies = response.data.data;
    yield put({ type: SORTING_FILMS.SUCCESS, movies });
    yield put({ type: ACTIVE_TAB, tab: activeTabChange });
}

const changeTabSortOrder = tab => {
    const activeTab = tab;
    activeTab.sortOrder = !activeTab.sortOrder;
    return activeTab;
};

const createUrl = tab => {
    const order = tab.sortOrder ? 'asc' : 'desc';
    return `?sortBy=${tab.SortBy}&sortOrder=${order}`;
};
