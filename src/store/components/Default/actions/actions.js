export const FETCH_REQUEST_TO_SERVER = 'FETCH_REQUEST_TO_SERVER';
export const SHOW_FILM_DETAIL = 'SHOW_FILM_DETAIL';
export const CURRENT_ACTIVE_TAB = 'CURRENT_ACTIVE_TAB';

export const getSortOnTab = movies => {
  return {
    type: CURRENT_ACTIVE_TAB,
    movies
  };
};

export const getFilm = active => {
  return {
    type: SHOW_FILM_DETAIL,
    payload: active
  };
};

export const fetchDataServer = movies => {
  return {
    type: FETCH_REQUEST_TO_SERVER,
    movies
  };
};
