import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Contacts from '../pages/Contacts'
import ErrorPage from '../pages/ErrorPage'
import Main from '../pages/Main'
import Thanks from '../pages/Thanks'
import TeachersPage from '../pages/TeachersPage'
import GoogleAnalytics from '../components/GoogleAnalytics/GoogleAnalytics'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/teachers" component={TeachersPage} />
    <Route exact path="/contacts" component={Contacts} />
    <Route exact path="/thanks" component={Thanks} />
    <Route path="/404" component={ErrorPage} />
    <Redirect from="*" to="/404" />
    <GoogleAnalytics />
  </Switch>
)

export default Routes
