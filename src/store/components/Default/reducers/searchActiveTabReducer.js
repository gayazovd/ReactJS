import { SEARCH_TAB } from '../actions/actions';

const activeTab = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_TAB:
            return action.searchTab;
        default:
            return state;
    }
};

export default activeTab;
