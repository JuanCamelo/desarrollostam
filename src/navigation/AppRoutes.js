import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import AppRouteComplement from "./AppRouteComplement";
import ScrollToTop from "../domain/ScrollToTop";
import MainLayout from "../components/layout/MainLayout";
import NotFound from "../components/notFound";
import Dashboard from "../components/dashboard/Dashboard";
import HomeUsers from "../components/adminUsers/HomeUsers";
import Register from "../components/Register/Register"



export default function AppRoutes(props) {
    return (
        <Router>
          <ScrollToTop />
          <Switch>
          <AppRouteComplement exact={true} path="/homePage" component={Dashboard} layout={MainLayout} />
          <AppRouteComplement exact={true} path="/users" component={HomeUsers} layout={MainLayout} />
          <AppRouteComplement exact={true} path="/Register" component={Register} layout={MainLayout} />
          <AppRouteComplement exact={true} path="/notFound" component={NotFound} layout={MainLayout} />          
          <Redirect to="/notFound" />
          </Switch>
          </Router>
    );
}
