import { combineReducers } from 'redux';
import dataFromServer from './components/Default/reducers/fetchReducers';
import activeFilm from './components/Default/reducers/activeReducer';
import activeTab from './components/Default/reducers/activeTabReducer';
import changeInput from './components/Default/reducers/changeInputReducer';

export default combineReducers({
  movies: dataFromServer,
  filmPreview: activeFilm,
  tabActive: activeTab
});
