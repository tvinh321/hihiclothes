import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import DetailPage from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import BookStylist from "./pages/BookStylist";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import Return from "./pages/Return";
import ReturnSuccess from "./pages/ReturnSuccess"

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminItems from "./pages/AdminItems";
import AdminPurchases from "./pages/AdminPurchases";
import AdminBookings from "./pages/AdminBookings";
import AdminStylists from "./pages/AdminStylists";
import AdminReturns from "./pages/AdminReturns";
import AdminReturnDetail from "./pages/AdminReturnDetail";

const App = () => {
  const user = JSON.parse(localStorage.getItem("hihiclothes-user"));
  const admin = JSON.parse(localStorage.getItem("hihiclothes-admin"));

  return (
    <BrowserRouter>
      <div>
        <Route exact path="/item/:id" component={DetailPage} />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/product-list" component={ProductList} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/payment/:id" component={Payment} />
        <Route exact path="/payment-success" component={PaymentSuccess} />
        <Route exact path="/book-stylist" component={BookStylist} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/admin" component={AdminLogin} />
        <Route exact path="/return-success" component={ReturnSuccess} />
        {user && (
          <>
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/return/:id" component={Return} />
          </>
        )}
        {
          admin && (
            <>
              <Route exact path="/admin/dashboard" component={AdminDashboard} />
              <Route exact path="/admin/items" component={AdminItems} />
              <Route exact path="/admin/purchases" component={AdminPurchases} />
              <Route exact path="/admin/bookings" component={AdminBookings} />
              <Route exact path="/admin/stylists" component={AdminStylists} />
              <Route exact path="/admin/returns" component={AdminReturns} />
              <Route exact path="/admin/return/:id" component={AdminReturnDetail} />
            </>
          )
        }
      </div>
    </BrowserRouter>
  )
};

export default App;
