import { getSortOnTab, getActiveTab } from './actions';
import { network } from '../../../../services/network';

const fetchBySort = tab => dispatch => {
    const url = createUrl(tab);
    const activeTab = changeTabSortOrder(tab);
    network(`/movies/${url}`).then(data => {
        const { data: movies } = data.data;
        dispatch(getSortOnTab(movies));
    });
    dispatch(getActiveTab(activeTab));
};

const changeTabSortOrder = tab => {
    const activeTab = tab;
    activeTab.sortOrder = !activeTab.sortOrder;
    return activeTab;
};

const createUrl = tab => {
    const order = tab.sortOrder ? 'asc' : 'desc';
    return `?sortBy=${tab.SortBy}&sortOrder=${order}`;
};

export default fetchBySort;
