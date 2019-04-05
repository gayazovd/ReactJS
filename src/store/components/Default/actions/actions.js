export const ACTIVE_TAB = 'ACTIVE_TAB';

export const LOAD_FILMS = {
    REQUESTED: 'LOAD_FILMS.REQUESTED', // ЭТО СЛУШАЕТ САГА
    PENDING: 'LOAD_FILMS.PENDING', // ЭТО СЛУШАЮТ РЕДЮСЕРЫ V put из саги
    FAILURE: 'LOAD_FILMS.FAILURE',
    SUCCESS: 'LOAD_FILMS.SUCCESS'
};

export const SHOW_FILM = {
    REQUESTED: 'SHOW_FILM.REQUESTED',
    PENDING: 'SHOW_FILM.PENDING',
    FAILURE: 'SHOW_FILM.FAILURE',
    SUCCESS: 'SHOW_FILM.SUCCESS'
};

export const SORTING_FILMS = {
    REQUESTED: 'SORTING_FILMS.REQUESTED',
    PENDING: 'SORTING_FILMS.PENDING',
    FAILURE: 'SORTING_FILMS.FAILURE',
    SUCCESS: 'SORTING_FILMS.SUCCESS'
};

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

export const fetchDataServer = movies => {
    return {
        type: FETCH_REQUEST_TO_SERVER,
        movies
    };
};
