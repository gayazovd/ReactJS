import { LOAD_FILMS, SORTING_TAB } from '../actions/actions';

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
    case SORTING_TAB:
      return action.movies;
    default:
      return state;
  }
};

export default dataFromServer;
