import {DISHES_FAILURE, DISHES_REQUEST, DISHES_SUCCESS} from "../actions/actionsType";

const initialState = {
    dishes: {},
    error: null,
    loading: false
};
const dishesReducer = (state = initialState, action) => {
    switch (action.type) {

        case DISHES_REQUEST:
            return {...state, loading: true};
        case DISHES_SUCCESS:
            return {...state, dishes: action.dish,loading: false, error: null};
        case DISHES_FAILURE:
            return {...state, loading: false, error: action.error};
        default:
            return state
    }
};
export default dishesReducer