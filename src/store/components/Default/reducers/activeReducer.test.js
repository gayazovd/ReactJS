import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import activeFilm from './activeReducer';
import { SHOW_FILM } from '../actions/actions';

configure({ adapter: new Adapter() });

describe('Test redux activeReducer', () => {
    it('should add new data', () => {
        const expectedState = { detail: { title: 'title', vote_average: 8 }, loading: false };
        const detail = { title: 'title', vote_average: 8 };
        const action = { type: SHOW_FILM.SUCCESS, detail };
        const newState = activeFilm({}, action);
        expect(newState).toMatchObject(expectedState);
    });
});
