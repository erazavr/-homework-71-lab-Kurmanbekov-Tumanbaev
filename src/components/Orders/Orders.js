import React, {Component} from 'react';
import './Orders.css'
import {connect} from "react-redux";
import {deleteOrder, getOrders} from "../../store/actions/ordersActions";
import {getDishes} from "../../store/actions/dishesActions";
class Orders extends Component{

     componentDidMount() {
         this.props.getOrders();
         this.props.getDishes();
    }
    getOrders = () => {
        const orders =  this.props.orders;
        const dishes =  this.props.dishes;
        let orderedDishes = [];
        if (dishes && orders) {
            Object.keys(dishes).map(dish => (
                Object.keys(orders).map(order => {
                     if(orders[order][dish] !== undefined) {
                        orderedDishes.push(
                            <div key={dish} className='Orders'>
                                {dishes[dish].dishName} <span style={{marginRight: '5px'}}>X</span>
                                {orders[order][dish]}
                                <b>{dishes[dish].cost}</b>
                                <p>Total: <b>{parseInt(dishes[dish].cost) * orders[order][dish] + 150}</b></p>
                                <button onClick={()=>this.props.deleteOrder(order)}>Complete order</button>
                            </div>
                        )
                    }
                })
            ))
        }

        return orderedDishes
    };

    render() {
        return (
            <div>
                {this.getOrders()}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    orders: state.orders.orders,
    dishes: state.dishes.dishes
});
const mapDispatchToProps = dispatch => ({
    getOrders: () => dispatch(getOrders()),
    getDishes: () => dispatch(getDishes()),
    deleteOrder: id => dispatch(deleteOrder(id))
});
export default connect(mapStateToProps, mapDispatchToProps) (Orders);