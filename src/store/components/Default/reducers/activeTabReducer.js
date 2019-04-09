// @flow
import { ACTIVE_TAB } from '../actions/actions';

type State = {
    type: string,
    tab: { id: number, name: string, SortBy: string, sortOrder: string }
};

type Action = {
    type: string,
    tab: { id: number, name: string, SortBy: string, sortOrder: string }
};

const activeTab = (state: State = {}, action: Action) => {
    switch (action.type) {
        case ACTIVE_TAB:
            return action.tab;
        default:
            return state;
    }
};

export default activeTab;
