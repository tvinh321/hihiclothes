import React from "react";

import { BrowserRouter, Router, Route } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import DetailPage from "./pages/detail-page/DetailPage";
import ProductList from "./pages/product-list/product-list";
import Checkout from "./pages/checkout/Checkout";
import Payment from "./pages/payment/Payment";
import PaymentSuccess from "./pages/payment-success/Payment-Success";

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/item/:id" component={DetailPage} />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/product-list" component={ProductList} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/payment/:id" component={Payment} />
      <Route exact path="/payment-success" component={PaymentSuccess} />
    </div>
  </BrowserRouter>
);

export default App;