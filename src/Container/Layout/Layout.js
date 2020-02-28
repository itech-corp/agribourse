import React from 'react';

import Login from '../Pages/LoginPage/Login';
import SignupPage from "../Pages/SignupPage/SignupPage";
import { Route, Switch} from 'react-router-dom';
import Home from './../Pages/HomePage/Home';
import ShopPage from './../Pages/shop/ShopPage';
import ProductDetail from './../../Components/UI/ProductDetail/ProductDetail';

function Layout(props) {
    return (
        <div>
            <Switch>
                <Route path="/shop/:productName" component={ProductDetail} /> 
                <Route path="/login" component={Login} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/" component= {Home}/>
            </Switch>
        </div>
    );
}

export default Layout;