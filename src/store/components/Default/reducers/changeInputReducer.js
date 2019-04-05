import { CHANGE_INPUT } from '../actions/actions';

const changeInput = (state = '', action) => {
    switch (action.type) {
        case CHANGE_INPUT:
            return action.inputText;
        default:
            return state;
    }
};

export default changeInput;
