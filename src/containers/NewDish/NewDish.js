import React, {Component} from 'react';
import './NewDish.css'
import {newDish} from "../../store/actions/dishesActions";
import {connect} from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
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
        let form = (
            <form onSubmit={this.newDishHandler} className='form'>
                <div className='form-inner'>
                    <label htmlFor="name" className='label'>Pizza Name</label>
                    <input
                        className='field'
                        type="text"
                        id='name'
                        name='dishName'

                        onChange={this.valueChanged}
                        placeholder='Pizza name'
                    />
                </div>
                <div className='form-inner'>
                    <label htmlFor="cost" className='label'>Pizza cost</label>
                    <input
                        className='field'
                        type="number"
                        id='cost'
                        name='cost'
                        onChange={this.valueChanged}
                        placeholder='Pizza cost'
                    />
                </div>
                <div className='form-inner'>
                    <label htmlFor="link" className='label'>Paste image link</label>
                    <input
                        className='field'
                        type="text"
                        id='link'
                        name='imgUrl'
                        onChange={this.valueChanged}
                        placeholder='Pizza image'
                    />
                </div>
                <button type='submit' className='form-btn'>Save</button>
            </form>
        );
        if (this.props.loading) {
            form = <Spinner/>
        }
        return (
            <div>
                {form}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    loading: state.dishes.loading,
    error: state.dishes.error
})
const mapDispatchToProps = dispatch => ({
    newDish: dish => dispatch(newDish(dish))
});
export default connect(mapStateToProps, mapDispatchToProps)(NewDish);