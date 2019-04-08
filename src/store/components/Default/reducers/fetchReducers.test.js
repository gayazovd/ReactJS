import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import dataFromServer from './fetchReducers';
import { LOAD_FILMS } from '../actions/actions';

configure({ adapter: new Adapter() });

describe('Test redux fetchReducers', () => {
    it('should add new data', () => {
        const newData = {
            movies: [
                { id: 1, rating: 'vote_average' },
                { id: 2, rating: 'vote_average' },
                { id: 3, rating: 'vote_average' }
            ],
            loading: false
        };
        const movies = [
            { id: 1, rating: 'vote_average' },
            { id: 2, rating: 'vote_average' },
            { id: 3, rating: 'vote_average' }
        ];
        const action = { type: LOAD_FILMS.SUCCESS, movies };
        const newState = dataFromServer({}, action);
        expect(newState).toMatchObject(newData);
    });
});
