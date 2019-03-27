import { getFilm } from './actions';
import { network } from '../../../../services/network';

const getDetailFilm = url => dispatch => {
  network(url).then(data => {
    const { data: movie } = data;
    dispatch(getFilm(movie));
  });
};

export default getDetailFilm;
