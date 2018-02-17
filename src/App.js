import React, { Component } from "react";
import "normalize.css";

import Header from "./Header/";
import TopDestionations from "./TopDestinations/";
import BestPrices from "./BestPrices/";
// import Discounts from "./Discounts/"; // Не доделан
import Sales from "./Sales/";
import Articles from "./Articles/";
import MobileApp from "./MobileApp/";
import Footer from "./Footer/";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TopDestionations />
        <BestPrices />
        {/* <Discounts /> */}
        <Sales />
        <Articles />
        <MobileApp />
        <Footer />
      </div>
    );
  }
}

export default App;
