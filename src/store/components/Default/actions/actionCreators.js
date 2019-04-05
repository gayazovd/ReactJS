import { LOAD_FILMS, SHOW_FILM, SORTING_FILMS } from './actions';

export const getSearchingMovies = (search, tab) => ({
    type: LOAD_FILMS.REQUESTED,
    payload: { search, tab }
});

export const getDetailFilm = url => ({ type: SHOW_FILM.REQUESTED, payload: { url } });

export const fetchBySort = tab => ({ type: SORTING_FILMS.REQUESTED, payload: { tab } });
