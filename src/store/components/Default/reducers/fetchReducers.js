import { LOAD_FILMS, SORTING_FILMS } from '../actions/actions';

const initialState = {
    loading: false,
    movies: []
};

const dataFromServer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_FILMS.SUCCESS:
            return { loading: false, movies: action.movies };
        case LOAD_FILMS.PENDING:
            return { ...state, loading: action.loading };
        case SORTING_FILMS.SUCCESS:
            return { loading: false, movies: action.movies };
        case SORTING_FILMS.PENDING:
            return { ...state, loading: action.loading };
        default:
            return state;
    }
};

export default dataFromServer;
