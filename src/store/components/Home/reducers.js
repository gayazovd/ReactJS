import { FETCH_REQUEST_TO_SERVER } from './actions';

const dataFromServer = (state = [], action) => {
    switch (action.type) {
        case FETCH_REQUEST_TO_SERVER:
            return action.movies;
        default:
            return state;
    }
};

export default dataFromServer;
