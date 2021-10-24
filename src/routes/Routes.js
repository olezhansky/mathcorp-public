import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Contacts from '../pages/Contacts';
import ErrorPage from '../pages/ErrorPage';
import Main from '../pages/Main';
import TeachersPage from '../pages/TeachersPage';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/teachers' component={TeachersPage} />
        <Route exact path='/contacts' component={Contacts} />
        <Route path='/404' component={ErrorPage} />
        <Redirect from='*' to='/404' />
    </Switch>
)

export default Routes
