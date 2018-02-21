import russia from "./images/russia.png";
import fly from "./images/fly.png";
import nordwind from "./images/nordwind.png";
import nordwindAirlines from "./images/nordwind-airlines.png";
import redWings from "./images/red-wings.png";

import redWingsSmall from "./images/red-wings-small.png";
import russiaSmall from "./images/russia-small.png";
import undefinedCompany from "./images/undefined-company.png";

export default [
  {
    type: "cheap",
    price: "7 712 ₽",
    logos: [russia],
    departure: {
      periodTime: "00:05 — 03:05",
      totalTime: "5 ч",
      type: "Прямой"
    },
    arrival: {
      periodTime: "10:35 — 17:10",
      totalTime: "4 ч 35 м",
      type: "Прямой"
    }
  },
  {
    type: "fast",
    price: "9 269 ₽",
    logos: [fly],
    departure: {
      periodTime: "07:30 — 09:50",
      totalTime: "4 ч 20 м",
      type: "Прямой"
    },
    arrival: {
      periodTime: "11:20 — 17:35",
      totalTime: "4 ч 15 м",
      type: "CDG"
    }
  },
  {
    type: "best",
    price: "8 029 ₽",
    logos: [nordwind],
    departure: {
      periodTime: "00:05 — 03:05",
      totalTime: "00:05 — 03:05",
      type: "Прямой"
    },
    arrival: {
      periodTime: "10:35 — 17:10",
      totalTime: "4 ч 35 м",
      type: "Прямой"
    }
  },
  {
    price: "7 712 ₽",
    logos: [nordwindAirlines],
    departure: {
      periodTime: "00:05 — 03:05",
      totalTime: "00:05 — 03:05",
      type: "Прямой"
    },
    arrival: {
      periodTime: "10:35 — 17:10",
      totalTime: "4 ч 35 м",
      type: "Прямой"
    }
  },
  {
    price: "8 240 ₽",
    logos: [redWings],
    departure: {
      periodTime: "07:00 — 09:30",
      totalTime: "4 ч 30 м",
      type: "Прямой"
    },
    arrival: {
      periodTime: "11:00 — 17:10",
      totalTime: "4 ч 10 м",
      type: "Прямой"
    }
  },
  {
    price: "9 108 ₽",
    logos: [redWingsSmall, russiaSmall],
    departure: {
      periodTime: "5 ч",
      totalTime: "00:05 — 03:05",
      type: "Прямой"
    },
    arrival: {
      periodTime: "11:00 — 17:10",
      totalTime: "4 ч 10 м",
      type: "Прямой"
    }
  },
  {
    price: "9 485 ₽",
    logos: [russiaSmall, undefinedCompany],
    departure: {
      periodTime: "00:05 — 03:05",
      totalTime: "5 ч",
      type: "Прямой"
    },
    arrival: {
      periodTime: "11:20 — 17:35",
      totalTime: "4 ч 15 м",
      type: "Прямой"
    }
  }
];
