// @flow
import { SHOW_FILM } from '../actions/actions';

type State = {
    +detail: {
        +id: number,
        +title: string,
        +tagline: string,
        +vote_average: number,
        +vote_count: number,
        +release_date: string,
        +poster_path: string,
        +overview: string,
        +budget: number,
        +revenue: number,
        +runtime: number,
        +genres: (?string)[]
    },
    +loading: boolean
};

type Action = {
    type: string,
    detail: Object,
    loading: boolean
};

const initialState = {
    detail: {},
    loading: false
};

const activeFilm = (state: State = initialState, action: Action) => {
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
