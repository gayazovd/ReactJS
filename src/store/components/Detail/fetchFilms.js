import { getFilm } from './actions';
import { network } from '../../../services/network';

const getDataFromServer = url => dispatch => {
  network(url).then(data => {
    const { data: movie } = data;
    dispatch(getFilm(movie));
  });
};

export default getDataFromServer;
