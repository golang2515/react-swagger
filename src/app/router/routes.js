import React from "react";
import { Route,IndexRoute } from "react-router";
import Master from "../containers/Master";

import HomePage from "../containers/pages/HomePage";
import DebugPage from "../containers/pages/DebugPage";
import SettingPage from "../containers/pages/SettingPage";
import GroupPage from "../containers/pages/GroupPage";
import LoginPage from "../containers/pages/LoginPage";
import error404 from "../containers/pages/error404";

export default (
    <Route path="/" component={Master}>
    	<IndexRoute component={HomePage} />
        <Route path="debug" component={DebugPage} />
        <Route path="group" component={GroupPage} />
        <Route path="setting" component={SettingPage}/>
        <Route path="login" component={LoginPage}/>
        <Route path="*" component={error404}/>
    </Route>
);