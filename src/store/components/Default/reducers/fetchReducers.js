import { FETCH_REQUEST_TO_SERVER, SORTING_TAB } from '../actions/actions';

const dataFromServer = (state = [], action) => {
  switch (action.type) {
    case FETCH_REQUEST_TO_SERVER:
      return action.movies;
    case SORTING_TAB:
      return action.movies;
    default:
      return state;
  }
};

export default dataFromServer;
