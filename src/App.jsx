import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import DetailPage from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import BookStylist from "./pages/BookStylist";

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/item/:id" component={DetailPage} />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/product-list" component={ProductList} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/payment/:id" component={Payment} />
      <Route exact path="/payment-success" component={PaymentSuccess} />
      <Route exact path="/book-stylist" component={BookStylist} />
    </div>
  </BrowserRouter>
);

export default App;
