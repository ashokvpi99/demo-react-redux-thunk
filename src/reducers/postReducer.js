import { SAVE_POST, GET_ALL_POST, DELETE_POST } from '../actionsTypes/postAction';

const initState = {
    posts: [],
    error:'',
};

export default (state = initState, action) => {
    switch(action.type) {
        case GET_ALL_POST:
            return {
                ...state,
                posts: action.payload,
            };
        case SAVE_POST:
            return {
            ...state,
            error: action.error ? action.error: ''
            };
        case DELETE_POST:
            return {
                ...state,
                error: action.error ? action.error: ''
            };
        default:
            return state;
    }
}