export const FETCH_REQUEST_TO_SERVER = 'FETCH_REQUEST_TO_SERVER';
export const SHOW_FILM_DETAIL = 'SHOW_FILM_DETAIL';
export const SORTING_TAB = 'SORTING_TAB';
export const ACTIVE_TAB = 'ACTIVE_TAB';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const SEARCH_TAB = 'SEARCH_TAB';

export const getSortOnTab = movies => {
  return {
    type: SORTING_TAB,
    movies
  };
};

export const getFilm = active => {
  return {
    type: SHOW_FILM_DETAIL,
    payload: active
  };
};

export const getActiveTab = tab => {
  return {
    type: ACTIVE_TAB,
    tab
  };
};

export const activeSearchTab = tab => {
  return {
    type: SEARCH_TAB,
    searchTab: tab
  };
};

export const fetchDataServer = movies => {
  return {
    type: FETCH_REQUEST_TO_SERVER,
    movies
  };
};