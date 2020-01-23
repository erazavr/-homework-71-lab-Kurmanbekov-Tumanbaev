import {DISHES_SUCCESS} from "../actions/actionsType";

const initialState = {
    dishes: {}
};
const dishesReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISHES_SUCCESS:
            return {...state, dishes: action.dish};
        default:
            return state
    }
};
export default dishesReducer