import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware, compose,combineReducers} from "redux";
import {Provider} from 'react-redux'
import thunk from "redux-thunk";
import App from './App';
import './index.css';
import dishesReducer from "./store/reducers/dishesReducer";
import ordersReducer from "./store/reducers/ordersReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    dishes: dishesReducer,
    orders: ordersReducer,
});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));


