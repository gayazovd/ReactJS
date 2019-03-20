import { getSortOnTab } from './actions';
import { network } from '../../../../services/network';

const fetchBySort = tab => dispatch => {
  const url = createUrl(tab);
  network(`/movies/${url}`).then(data => {
    const { data: movies } = data.data;
    dispatch(getSortOnTab(movies));
  });
};

const createUrl = tab => {
  const order = tab.sortOrder ? 'asc' : 'desc';
  return `?sortBy=${tab.SortBy}&sortOrder=${order}`;
};

export default fetchBySort;
