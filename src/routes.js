import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantDetailPage from "./pages/RestaurantDetailPage";
import UpdatePage from "./pages/UpdatePage";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/restaurant/:id" component={RestaurantDetailPage} />
    <Route exact path="/update/:id" component={UpdatePage} />
  </Switch>
);
