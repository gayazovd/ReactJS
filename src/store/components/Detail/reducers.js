import { SHOW_FILM_DETAIL } from './actions';
import { GET_ID_FILM } from './actions';

const movie = (state = {}, action) => {
  switch (action.type) {
    case SHOW_FILM_DETAIL:
      return action.movie;
    case GET_ID_FILM:
      return { ...state, id: action.id };
    default:
      return state;
  }
};

export default movie;
