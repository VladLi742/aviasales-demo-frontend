import React from "react";

import TopDestionations from "./TopDestinations/";
import BestPrices from "./BestPrices/";
import Discounts from "./Discounts/";
import Sales from "./Sales/";
import Articles from "./Articles/";
import MobileApp from "./MobileApp/";

export default function() {
  return (
    <div>
      <TopDestionations />
      <BestPrices />
      <Discounts />
      <Sales />
      <Articles />
      <MobileApp />
    </div>
  );
}
