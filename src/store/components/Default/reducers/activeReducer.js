import { SHOW_FILM_DETAIL } from '../actions/actions';

const activeFilm = (state = {}, action) => {
  switch (action.type) {
    case SHOW_FILM_DETAIL:
      return action.payload;
    default:
      return state;
  }
};

export default activeFilm;
