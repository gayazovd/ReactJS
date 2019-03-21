import { ACTIVE_TAB } from '../actions/actions';

const activeTab = (state = {}, action) => {
  switch (action.type) {
    case ACTIVE_TAB:
      return action.tab;
    default:
      return state;
  }
};

export default activeTab;
