import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";

function Routes() {
  return (
    <BrowserRouter>
      <Route component={Landing} exact path="/" />
      <Route component={TeacherList} path="/study" />
      <Route component={TeacherForm} path="/give-classes" />
    </BrowserRouter>
  );
}

export default Routes;
