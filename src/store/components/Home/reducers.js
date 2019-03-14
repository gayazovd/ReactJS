import { FETCH_REQUEST_TO_SERVER } from './actions';

export const dataFromServer = (state = [], action) => {
    switch(action.type){
        case FETCH_REQUEST_TO_SERVER:
            return action.movies;
        default:
            return state;
    }
}