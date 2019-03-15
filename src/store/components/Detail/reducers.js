import { SHOW_FILM_DETAIL } from './actions';

const movie = (state = {}, action) => {
  switch (action.type) {
    case SHOW_FILM_DETAIL:
      return action.movie;
    default:
      return state;
  }
};

export default movie;
