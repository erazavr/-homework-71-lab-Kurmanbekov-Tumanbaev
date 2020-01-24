import {ORDERS_FAILURE, ORDERS_REQUEST, ORDERS_SUCCESS} from "./actionsType";
import axiosDishes from "../../dishesApi";
import {dishesFailure, dishesRequest} from "./dishesActions";

export const ordersRequest = () => ({type: ORDERS_REQUEST});
export const ordersSuccess = order => ({type: ORDERS_SUCCESS, order});
export const ordersFailure = error => ({type: ORDERS_FAILURE, error});

export const getOrders = () => {
    return async dispatch => {
        try {
            dispatch(ordersRequest());
            const response = await axiosDishes.get('/orders.json');
            dispatch(ordersSuccess(response.data))
        }catch (e) {
            dispatch(ordersFailure(e))
        }

    }
};
export const deleteOrder = (id) => {
    return  async dispatch => {
        try {
            dispatch(dishesRequest());
            await axiosDishes.delete(`/orders/${id}.json`);
            dispatch(getOrders())
        }catch (e) {
            dispatch(dishesFailure(e))
        }
    }
};