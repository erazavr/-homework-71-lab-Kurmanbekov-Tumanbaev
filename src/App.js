import React from 'react';
import Layout from "./components/Layout/Layout";
import {Route, Switch} from "react-router";
import DishesPage from "./containers/DishesPage/DishesPage";
import OrderPage from "./containers/OrderPage/OrderPage";
import NewDish from "./containers/NewDish/NewDish";
import EditDish from "./containers/EditDish/EditDish";

const App = () => (
    <Layout>
      <Switch>
        <Route path='/' exact component={DishesPage}/>
        <Route path='/orders' exact component={OrderPage}/>
        <Route path='/newDish' exact component={NewDish}/>
        <Route path='/editDish/:id' exact component={EditDish}/>
      </Switch>
    </Layout>
);

export default App;