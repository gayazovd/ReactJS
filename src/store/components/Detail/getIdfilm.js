import { getId } from './actions';

export const getIdByFilm = id => dispatch => dispatch(getId(id));
