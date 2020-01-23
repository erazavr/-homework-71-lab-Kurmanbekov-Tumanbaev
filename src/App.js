import React from 'react';
import Layout from "./components/Layout/Layout";
import {Route, Switch} from "react-router";
import DishesPage from "./containers/DishesPage/DishesPage";
import OrderPage from "./containers/OrderPage/OrderPage";

const App = () => (
    <Layout>
      <Switch>
        <Route path='/' exact component={DishesPage}/>
        <Route path='/orders' exact component={OrderPage}/>
      </Switch>
    </Layout>
);

export default App;