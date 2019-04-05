import { SHOW_FILM } from '../actions/actions';

const initialState = {
    detail: {},
    laoding: false
};

const activeFilm = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_FILM.PENDING:
            return { ...state, loading: action.loading };
        case SHOW_FILM.SUCCESS:
            return { loading: false, detail: action.detail };
        default:
            return state;
    }
};

export default activeFilm;
