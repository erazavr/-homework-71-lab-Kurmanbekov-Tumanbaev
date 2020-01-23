import {DISHES_FAILURE, DISHES_REQUEST, DISHES_SUCCESS} from "./actionsType";
import axiosDishes from "../../dishesApi";

export const dishesRequest = () => ({type: DISHES_REQUEST});
export const dishesSuccess = dish => ({type: DISHES_SUCCESS, dish});
export const dishesFailure = error => ({type: DISHES_FAILURE, error});

export const getDishes = () => {
    return async dispatch => {
        try {
            dispatch(dishesRequest());
            const response = await axiosDishes.get('/dishes.json');
            dispatch(dishesSuccess(response.data))
        }catch (e) {
            dispatch(dishesFailure(e))
        }
    }
};
export const deleteDish = (id) => {
    return  async dispatch => {
        try {
            dispatch(dishesRequest());
            await axiosDishes.delete(`/dishes/${id}.json`);
            dispatch(getDishes())
        }catch (e) {
            dispatch(dishesFailure(e))
        }
    }
};
export const newDish = dish => {
    return async dispatch => {
        try {
            dispatch(dishesRequest());
            await axiosDishes.post('/dishes.json', dish);
            dispatch(dishesSuccess())
        }catch (e) {
            dispatch(dishesFailure(e))
        }
    }
};
export const editDish = (id,dish) => {
    return async dispatch => {
        try {
            dispatch(dishesRequest());
            await axiosDishes.put(`/dishes/${id}.json`, dish);
            dispatch(getDishes())
        }catch (e) {
            dispatch(dishesFailure(e))
        }
    }
}