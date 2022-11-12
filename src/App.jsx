import React from "react";

import { BrowserRouter, Router, Route } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import DetailPage from "./pages/detail-page/DetailPage";

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/item/:id" component={DetailPage} />
      <Route exact path="/" component={Homepage} />
    </div>
  </BrowserRouter>
);

export default App;