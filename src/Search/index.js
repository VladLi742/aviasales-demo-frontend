import React from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Main from "./Main";

export default function() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Поиск билетов</title>
      </Helmet>

      <Header />
      <Main />
    </div>
  );
}
