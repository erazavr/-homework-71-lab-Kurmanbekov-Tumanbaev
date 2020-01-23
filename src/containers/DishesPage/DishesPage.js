import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import Dishes from "../../components/Dishes/Dishes";
import {getDishes} from "../../store/actions/dishesActions";

class DishesPage extends Component {
    componentDidMount() {
        this.props.getDishes()
    }

    render() {
        return (
            <Fragment>
                <div className='Dishes-Title flex'>
                    <h3>Dishes</h3>
                    <button>Add new Dish</button>
                </div>
                <div className='Dishes'>
                {this.props.dishes &&
                    Object.keys(this.props.dishes).map(dish => (
                        <Dishes
                            dishName={this.props.dishes[dish].dishName}
                            img={this.props.dishes[dish].img}
                            cost={this.props.dishes[dish].cost}
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
    getDishes: () => dispatch(getDishes())
});
export default connect(mapStateToProps, mapDispatchToProps)(DishesPage);