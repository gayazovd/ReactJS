export const SHOW_FILM_DETAIL = 'SHOW_FILM_DETAIL';

export const getFilm = movie => {
  return {
    type: SHOW_FILM_DETAIL,
    movie
  };
};
