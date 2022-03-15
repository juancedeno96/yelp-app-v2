import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default (
  <Routes>
    <Route exact path="/" component={Home} />
  </Routes>
);
