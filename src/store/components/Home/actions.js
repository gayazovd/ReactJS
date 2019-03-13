export const FETCH_REQUEST_TO_SERVER = 'FETCH_REQUEST_TO_SERVER';

export const fetchDataServer = movies => {
    return {
        type: FETCH_REQUEST_TO_SERVER,
        movies
    }
}