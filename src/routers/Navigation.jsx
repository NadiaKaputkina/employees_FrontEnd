import React from "react";
import {NavLink} from "react-router-dom";

import RouteURLs from "../constants/RouteURLs";
import TabBar from "../components/tabbar/TabBar";


const Navigation = () => {

    return (
        <TabBar>
            <NavLink exact to={RouteURLs.home} activeClassName='active'>home</NavLink>
            <NavLink to={RouteURLs.employees} activeClassName='active'>employees</NavLink>
            <NavLink to={RouteURLs.positions} activeClassName='active'>positions</NavLink>
        </TabBar>
    )
};

export default Navigation;