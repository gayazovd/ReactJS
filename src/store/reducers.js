import { combineReducers } from 'redux';
import dataFromServer from './components/Default/reducers/fetchReducers';
import activeFilm from './components/Default/reducers/activeReducer';
import activeTab from './components/Default/reducers/activeTabReducer';

export default combineReducers({
  loadingMovies: dataFromServer,
  filmPreview: activeFilm,
  tabActive: activeTab
});
