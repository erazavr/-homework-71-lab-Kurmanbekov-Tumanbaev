import {ORDERS_SUCCESS} from "../actions/actionsType";

const initialState = {
    orders: null
};
const ordersReducer = (state = initialState ,action) => {
    switch (action.type) {
        case ORDERS_SUCCESS:
            return {...state, orders: action.order};

        default:
            return state
    }
};
export default ordersReducer