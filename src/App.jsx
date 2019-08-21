import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import RouteURLs from './constants/RouteURLs';
import NewBox from './routers/NewBox';
import EditBox from './routers/EditBox';
import PageComponent from "./routers/PageComponent";
import Navigation from "./routers/Navigation";
import Home from './containers/Home';
import ErrorPage from './containers/ErrorPage';
import APIService from "./services/APIService";


class App extends Component {

    componentDidMount() {
        APIService.fetchData(RouteURLs.employees);
        APIService.fetchData(RouteURLs.positions);
    }

    render() {
        return (
            <>
                <Navigation/>

                <Switch>
                    <Route exact path={RouteURLs.home} component={Home}/>

                    <Route exact path={[RouteURLs.employees, RouteURLs.positions]} component={PageComponent}/>

                    <Route exact path={[`${RouteURLs.employees}${RouteURLs.new}`, `${RouteURLs.positions}${RouteURLs.new}`]} component={NewBox}/>

                    <Route path={[`${RouteURLs.employees}${RouteURLs.id}`, `${RouteURLs.positions}${RouteURLs.id}`]} component={EditBox}/>

                    <Route path='*' component={ErrorPage}/>
                </Switch>
            </>
        );
    }
}

export default App;