import React, { Component } from "react";
import reactFlexboxGrid, { Row, Col } from "react-flexbox-grid";
import normalize from "normalize.css";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import "./App.css";
import Header from "./Header/";
import TopDestionations from "./TopDestinations/";
import BestPrices from "./BestPrices/";
import Sales from "./Sales/";
import Articles from "./Articles/";
import MobileApp from "./MobileApp/";
import Footer from "./Footer/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TopDestionations />
        <BestPrices />
        <Sales />
        <Articles />
        <MobileApp />
        <Footer />
      </div>
    );
  }
}

export default App;
