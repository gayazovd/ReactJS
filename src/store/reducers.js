import { combineReducers } from 'redux';
import dataFromServer from './components/Home/reducers';
import movie from './components/Detail/reducers';

export default combineReducers({
  movies: dataFromServer,
  movie
});
