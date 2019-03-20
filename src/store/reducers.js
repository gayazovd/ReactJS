import { combineReducers } from 'redux';
import dataFromServer from './components/Default/reducers/fetchReducers';
import activeFilm from './components/Default/reducers/activeReducer';
import tabs from './components/Default/reducers/tabs';

export default combineReducers({
  movies: dataFromServer,
  active: activeFilm,
  tabs
});
