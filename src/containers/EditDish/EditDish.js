import React, {Component} from 'react';
import {connect} from "react-redux";
import {editDish, getDishes} from "../../store/actions/dishesActions";
import '../NewDish/NewDish.css'
import Spinner from "../../components/UI/Spinner/Spinner";
class EditDish extends Component {
    state = {
        dishName: '',
        imgUrl: '',
        cost: ''
    };

     componentDidMount() {
        const id = this.props.match.params.id;
         this.props.dishes[id] && this.setState({
            dishName: this.props.dishes[id].dishName,
            imgUrl: this.props.dishes[id].img,
            cost: this.props.dishes[id].cost
        });
    }
    editDish = async (e) => {
        const id = this.props.match.params.id;
        e.preventDefault();
        const editedDish = {
            dishName: this.state.dishName,
            img: this.state.imgUrl,
            cost: this.state.cost
        };
        await this.props.editDish(id,editedDish);
        this.props.history.push('/')
    };
    valueChanged = event => this.setState({[event.target.name]: event.target.value});
    render() {
        let form = (
            <form action="" onSubmit={this.editDish} className='form'>
                <div className='form-inner'>
                    <label htmlFor="" className='label'>Edit dish name</label>
                    <input
                        className='field'
                        type="text"
                        name='dishName'
                        value={this.state.dishName}
                        onChange={this.valueChanged}
                    />
                </div>
                <div className='form-inner'>
                    <label htmlFor="" className='label'>Edit cost</label>
                    <input
                        className='field'
                        type="number"
                        name='cost'
                        value={this.state.cost}
                        onChange={this.valueChanged}
                    />
                </div>
                <div className='form-inner'>
                    <label htmlFor="" className='label'>Edit img url</label>
                    <input
                        className='field'
                        type="text"
                        name='imgUrl'
                        value={this.state.imgUrl}
                        onChange={this.valueChanged}
                    />
                </div>
                <button type='submit' className='form-btn'>Edit</button>
            </form>
        );
        if (this.props.loading) {
            form=<Spinner/>
        }
        return (
            <div>
                {form}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    dishes: state.dishes.dishes,
    loading: state.dishes.loading,
    error: state.dishes.error
});
const mapDispatchToProps = dispatch => ({
    getDishes: () => dispatch(getDishes()),
    editDish: (id, dish) => dispatch(editDish(id,dish))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditDish);