import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "normalize.css";

import Header from "./Header";
import Home from "./Home/";
import Search from "./Search/";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Header} />
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
