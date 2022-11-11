import React from "react";

import { BrowserRouter, Router, Route } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Homepage} />
    </div>
  </BrowserRouter>
);

export default App;