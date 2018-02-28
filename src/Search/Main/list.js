import russia from "./images/russia.png";
import fly from "./images/fly.png";
import nordwind from "./images/nordwind.png";
import nordwindAirlines from "./images/nordwind-airlines.png";
import redWings from "./images/red-wings.png";

import redWingsSmall from "./images/red-wings-small.png";
import russiaSmall from "./images/russia-small.png";
import undefinedCompany from "./images/undefined-company.png";

import luggage from "./images/luggage.svg";
import handLuggage from "./images/hand-luggage.svg";
import noHandLuggage from "./images/no-hand-luggage.svg";
import unknownLuggage from "./images/unknown-luggage.svg";

export default [
  {
    type: "cheap",
    price: "7 712 ₽",
    whereToBuy: "на Clickavia",
    luggage: [
      {
        icon: luggage,
        handIcon: handLuggage,
        kilograms: "5",
        handKilograms: "15"
      }
    ],
    logos: [russia],
    hasCharter: true,
    departure: {
      startTime: "00:05",
      endTime: "03:05",
      totalTime: "5 ч",
      town: "Москва",
      date: "24 фев 2018, Сб",
      stops: ["VKO", "BCN"],
      type: "Прямой"
    },
    arrival: {
      startTime: "10:35",
      endTime: "17:10",
      totalTime: "4 ч 35 м",
      town: "Барселона",
      date: "24 фев 2018, Сб",
      stops: ["BCN", "SVO"],
      type: "Прямой"
    }
  },
  {
    type: "best",
    price: "8 029 ₽",
    whereToBuy: "на Билетик Аэро",
    luggage: [
      {
        icon: luggage,
        handIcon: noHandLuggage,
        kilograms: "5"
      }
    ],
    logos: [nordwind],
    hasCharter: false,
    departure: {
      startTime: "00:15",
      endTime: "03:10",
      totalTime: "4 ч 55м",
      town: "Москва",
      date: "24 фев 2018, Сб",
      stops: ["VKO", "BCN"],
      type: "Прямой"
    },
    arrival: {
      startTime: "10:45",
      endTime: "17:15",
      totalTime: "4 ч 35 м",
      town: "Барселона",
      date: "24 фев 2018, Сб",
      stops: ["BCN", "SVO"],
      type: "Прямой"
    }
  },
  {
    price: "8 164 ₽",
    logos: [nordwindAirlines],
    hasCharter: true,
    whereToBuy: "на Aviakassa",
    luggage: [
      {
        icon: luggage,
        handIcon: handLuggage,
        kilograms: "5",
        handKilograms: "X",
        cost: "Нет багажа"
      },
      {
        icon: luggage,
        handIcon: handLuggage,
        kilograms: "5",
        handKilograms: "12",
        cost: "- 136 ₽"
      }
    ],
    departure: {
      startTime: "00:15",
      endTime: "03:10",
      totalTime: "4 ч 55м",
      town: "Москва",
      date: "24 фев 2018, Сб",
      stops: ["VKO", "BCN"],
      type: "Прямой"
    },
    arrival: {
      startTime: "10:45",
      endTime: "17:15",
      totalTime: "4 ч 35 м",
      town: "Барселона",
      date: "24 фев 2018, Сб",
      stops: ["BCN", "SVO"],
      type: "Прямой"
    }
  },
  {
    price: "8 240 ₽",
    logos: [redWings],
    hasCharter: true,
    whereToBuy: "на Билетик Аэро",
    luggage: [
      {
        icon: luggage,
        handIcon: handLuggage,
        kilograms: "10",
        handKilograms: "X",
        cost: "Нет багажа"
      },
      {
        icon: luggage,
        handIcon: handLuggage,
        kilograms: "10",
        handKilograms: "20",
        cost: "- 267 ₽"
      }
    ],
    services: ["Clickavia", "Aviakassa"],
    costs: ["8 302 ₽", "8 376 ₽"],
    others: "3 предложения",
    departure: {
      startTime: "07:00",
      endTime: "09:30",
      totalTime: "4 ч 30 м",
      town: "Москва",
      date: "24 фев 2018, Сб",
      stops: ["VKO", "BCN"],
      type: "Прямой"
    },
    arrival: {
      startTime: "11:00",
      endTime: "17:10",
      totalTime: "4 ч 10 м",
      town: "Барселона",
      date: "24 фев 2018, Сб",
      stops: ["BCN", "SVO"],
      type: "Прямой"
    }
  },
  {
    price: "9 108 ₽",
    logos: [redWingsSmall, russiaSmall],
    hasCharter: true,
    whereToBuy: "на Clickavia",
    luggage: [
      {
        icon: luggage,
        handIcon: handLuggage,
        kilograms: "10",
        handKilograms: "15"
      }
    ],
    departure: {
      startTime: "00:05",
      endTime: "03:05",
      totalTime: "5 ч",
      town: "Москва",
      date: "24 фев 2018, Сб",
      stops: ["VKO", "BCN"],
      type: "Прямой"
    },
    arrival: {
      startTime: "11:00",
      endTime: "17:10",
      totalTime: "4 ч 10 м",
      town: "Барселона",
      date: "24 фев 2018, Сб",
      stops: ["BCN", "SVO"],
      type: "Прямой"
    }
  },
  {
    type: "fast",
    price: "9 269 ₽",
    whereToBuy: "на Biletix",
    luggage: [
      {
        icon: unknownLuggage,
        handIcon: handLuggage,
        kilograms: "?",
        handKilograms: "20"
      }
    ],
    services: ["Svyaznoy Travel", "Билетик Аэро"],
    costs: ["9 275 ₽", "9 587 ₽"],
    others: "4 предложения",
    logos: [fly],
    hasCharter: true,
    departure: {
      startTime: "07:30",
      endTime: "09:50",
      totalTime: "4 ч 20 м",
      town: "Москва",
      date: "24 фев 2018, Сб",
      stops: ["VKO", "BCN"],
      type: "Прямой"
    },
    arrival: {
      startTime: "11:20",
      endTime: "17:35",
      totalTime: "4 ч 15 м",
      town: "Барселона",
      date: "24 фев 2018, Сб",
      stops: ["BCN", "SVO"],
      type: "CDG"
    },
    remained: "4 билета"
  },
  {
    price: "9 485 ₽",
    logos: [russiaSmall, undefinedCompany],
    hasCharter: true,
    whereToBuy: "на Clickavia",
    luggage: [
      {
        icon: unknownLuggage,
        handIcon: handLuggage,
        kilograms: "?",
        handKilograms: "15"
      }
    ],
    departure: {
      startTime: "00:05",
      endTime: "03:05",
      totalTime: "5 ч",
      town: "Москва",
      date: "24 фев 2018, Сб",
      stops: ["VKO", "BCN"],
      type: "Прямой"
    },
    arrival: {
      startTime: "11:20",
      endTime: "17:35",
      totalTime: "4 ч 15 м",
      town: "Барселона",
      date: "24 фев 2018, Сб",
      stops: ["BCN", "SVO"],
      type: "Прямой"
    }
  }
];
