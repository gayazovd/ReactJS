import { network } from '../../../../services/network';
import { fetchDataServer } from './actions';

const getSearchingMovies = (searching, tab) => dispatch => {
  console.log(searching + ' ' + tab);
  const url = createUrl(searching, tab);
  network(url).then(data => {
    const { data: movies } = data.data;
    dispatch(fetchDataServer(movies));
  });
};

const createUrl = (searching, tab) => {
  return `/movies?search=${searching}&searchBy=${tab}`;
};

export default getSearchingMovies;
