import { LOAD_FILMS, SHOW_FILM } from './actions';

export const getSearchingMovies = (search, tab) => ({
  type: LOAD_FILMS.REQUESTED,
  payload: { search, tab }
});

export const getDetailFilm = url => ({ type: SHOW_FILM.REQUESTED, payload: { url } });
