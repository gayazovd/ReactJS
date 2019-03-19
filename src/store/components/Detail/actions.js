export const SHOW_FILM_DETAIL = 'SHOW_FILM_DETAIL';
export const GET_ID_FILM = 'GET_ID_FILM';

export const getFilm = movie => {
  return {
    type: SHOW_FILM_DETAIL,
    movie
  };
};

export const getId = id => {
  return {
    type: GET_ID_FILM,
    id
  };
};
