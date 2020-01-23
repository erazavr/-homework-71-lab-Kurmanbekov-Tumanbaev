import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import Dishes from "../../components/Dishes/Dishes";
import {deleteDish, getDishes} from "../../store/actions/dishesActions";
import {NavLink} from "react-router-dom";

class DishesPage extends Component {
    componentDidMount() {
        this.props.getDishes()
    }
    render() {
        return (
            <Fragment>
                <div className='Dishes-Title flex'>
                    <h3>Dishes</h3>
                    <NavLink to='/newDish'>Add new Dish</NavLink>
                </div>
                <div className='Dishes'>
                {this.props.dishes &&
                    Object.keys(this.props.dishes).map(dish => (
                        <Dishes
                            key={dish}
                            dishName={this.props.dishes[dish].dishName}
                            img={this.props.dishes[dish].img}
                            cost={this.props.dishes[dish].cost}
                            remove={()=>this.props.deleteDish(dish)}
                            to={`/editDish/${dish}`}
                        />
                    ))

                }
                </div>

            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    dishes: state.dishes.dishes
});
const mapDispatchToProps = dispatch => ({
    getDishes: () => dispatch(getDishes()),
    deleteDish: (id) => dispatch(deleteDish(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(DishesPage);