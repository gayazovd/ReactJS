import { combineReducers } from 'redux';
import dataFromServer from './components/Default/reducers/fetchReducers';
import activeFilm from './components/Default/reducers/activeReducer';
import activeTab from './components/Default/reducers/activeTabReducer';
import searchActiveTabReducer from './components/Default/reducers/searchActiveTabReducer';

export default combineReducers({
  movies: dataFromServer,
  filmPreview: activeFilm,
  tabActive: activeTab,
  searchTab: searchActiveTabReducer
});
