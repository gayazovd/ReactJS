import { fetchDataServer } from './actions';
import { network } from '../../../services/network'; 

export const fetchData = url => dispatch => {
        network(url)
            .then(data =>{
                const {data: movies} = data.data;
                dispatch(fetchDataServer(movies))
            }) 
    }
