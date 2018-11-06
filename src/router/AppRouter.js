import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/Dashboard';
import NotFound from '../components/Error';
import LoginPage from '../components/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (

    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path='/' component={ LoginPage } exact = {true} />
                <PrivateRoute path='/dashboard' component={ DashboardPage } />
                <Route component={ NotFound } />
            </Switch>
        </div>
    </Router>

);

export default AppRouter;