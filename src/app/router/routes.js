import React from "react";
import { Route,IndexRoute } from "react-router";
import Master from "../containers/Master";

import HomePage from "../containers/pages/HomePage";
import Dashboard from "../containers/pages/Dashboard";
import AboutPage from "../containers/pages/AboutPage";
import LoginPage from "../containers/pages/LoginPage";
import error404 from "../containers/pages/error404";

export default (
    <Route path="/" component={Master}>
    	<IndexRoute component={HomePage} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="about" component={AboutPage} />
        <Route path="login" component={LoginPage}/>
        <Route path="*" component={error404}/>
    </Route>
);