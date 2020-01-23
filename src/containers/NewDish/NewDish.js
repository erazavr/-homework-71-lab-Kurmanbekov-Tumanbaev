import React, {Component} from 'react';
import './NewDish.css'
import {newDish} from "../../store/actions/dishesActions";
import {connect} from "react-redux";
class NewDish extends Component {
    state = {
        dishName: '',
        imgUrl: '',
        cost: '',
    };
    newDishHandler = async (e) => {
        e.preventDefault();
        const newDish = {
                dishName: this.state.dishName,
                img: this.state.imgUrl,
                cost: this.state.cost
        };
        await this.props.newDish(newDish);
        this.props.history.push('/')
    };
    valueChanged = event => this.setState({[event.target.name]: event.target.value});
    render() {
        return (
            <div>
                <form onSubmit={this.newDishHandler}>
                    <div>
                        <label htmlFor="name">Pizza Name</label>
                        <input
                            type="text"
                            id='name'
                            name='dishName'
                            onChange={this.valueChanged}
                        />
                    </div>
                    <div>
                        <label htmlFor="cost">Pizza cost</label>
                        <input
                            type="number"
                            id='cost'
                            name='cost'
                            onChange={this.valueChanged}
                        />
                    </div>
                    <div>
                        <label htmlFor="link">Paste image link</label>
                        <input
                            type="text"
                            id='link'
                            name='imgUrl'
                            onChange={this.valueChanged}
                        />
                    </div>
                    <button type='submit'>Save</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {}
};
const mapDispatchToProps = dispatch => ({
    newDish: dish => dispatch(newDish(dish))
});
export default connect(mapStateToProps, mapDispatchToProps)(NewDish);