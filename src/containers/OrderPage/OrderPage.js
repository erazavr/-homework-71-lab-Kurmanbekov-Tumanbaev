import React, {Component, Fragment} from 'react';
import Orders from "../../components/Orders/Orders";

class OrderPage extends Component {
    render() {
        return (
            <Fragment>
                <h3>Orders</h3>
               <Orders/>
            </Fragment>
        );
    }
}

export default OrderPage;