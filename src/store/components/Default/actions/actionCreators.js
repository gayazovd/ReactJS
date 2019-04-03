import { FETCH_REQUEST, SHOW_FILM } from './actions';

export const getSearchingMovies = (search, tab) => ({
  type: FETCH_REQUEST,
  payload: { search, tab }
});

export const getDetailFilm = url => ({ type: SHOW_FILM, payload: { url } });
