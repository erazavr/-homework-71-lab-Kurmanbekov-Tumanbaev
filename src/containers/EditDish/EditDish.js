import React, {Component} from 'react';
import {connect} from "react-redux";
import {editDish, getDishes} from "../../store/actions/dishesActions";

class EditDish extends Component {
    state = {
        dishName: '',
        imgUrl: '',
        cost: ''
    };

    async componentDidMount() {
        const id = this.props.match.params.id;
        await this.props.getDishes();
        await this.props.dishes[id] && this.setState({
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
        return (
            <div>

                <form action="" onSubmit={this.editDish}>
                    <div>
                        <label htmlFor="">Edit dish name</label>
                        <input
                            type="text"
                            name='dishName'
                            value={this.state.dishName}
                            onChange={this.valueChanged}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Edit cost</label>
                        <input
                            type="number"
                            name='cost'
                            value={this.state.cost}
                            onChange={this.valueChanged}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Edit img url</label>
                        <input
                            type="text"
                            name='imgUrl'
                            value={this.state.imgUrl}
                            onChange={this.valueChanged}
                        />
                    </div>
                    <button type='submit'>Edit</button>
                </form>

            </div>
        );
    }
}
const mapStateToProps = state => ({
    dishes: state.dishes.dishes
});
const mapDispatchToProps = dispatch => ({
    getDishes: () => dispatch(getDishes()),
    editDish: (id, dish) => dispatch(editDish(id,dish))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditDish);