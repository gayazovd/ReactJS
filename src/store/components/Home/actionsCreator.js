import { fetchDataServer } from './actions';
import { network } from '../../../services/network';

const fetchData = url => dispatch => {
    network(url).then(data => {
        const { data: movies } = data.data;
        dispatch(fetchDataServer(movies));
    });
};

export default fetchData;
