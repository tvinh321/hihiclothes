import React from "react";

import { BrowserRouter, Router, Route } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import DetailPage from "./pages/detail-page/DetailPage";
import ProductList from "./pages/product-list/product-list";

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/item/:id" component={DetailPage} />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/product-list" component={ProductList} />
    </div>
  </BrowserRouter>
);

export default App;