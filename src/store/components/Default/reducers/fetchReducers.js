// @flow
import { LOAD_FILMS, SORTING_FILMS } from '../actions/actions';

const initialState = {
    loading: false,
    movies: []
};

export type detail = {
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
};

type State = {
    loading: boolean,
    movies: detail[],
    loading: boolean
};

type Action = {
    type: string,
    loading: boolean,
    movies: detail[]
};

const dataFromServer = (state: State = initialState, action: Action) => {
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
