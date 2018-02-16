import React from "react";
import reactFlexboxGrid, { Row, Col } from "react-flexbox-grid";
import {
  Body,
  MainOffersTitle,
  MainOffersWrapper,
  MainOfferHeader,
  MainOfferName,
  MainOffer,
  MainOfferCompany,
  MainOfferPriceWrapper,
  MainOfferPrice,
  MainOfferRemainDays,
  MainOfferDescription,
  MainOfferReadMore,
  MainOffersAllOffers,
  MainOffersAveragePriceInfo,
  MainOffersNotes
} from "./style.js";

import logo from "./logo.png";
import lufthansa from "./lufthansa.png";
import pobeda from "./pobeda.png";

export default function() {
  return (
    <Body>
      <MainOffersTitle>Спецпредложения на авиабилеты</MainOffersTitle>
      <MainOffersWrapper>
        <MainOfferHeader>
          <MainOfferName>Билеты от 499 рублей!</MainOfferName>
        </MainOfferHeader>
        <MainOffer>
          <Col xs={6}>
            <MainOfferCompany src={pobeda} />
          </Col>
          <Col xs={6}>
            <MainOfferPriceWrapper>
              от <MainOfferPrice>499 ₽</MainOfferPrice>
            </MainOfferPriceWrapper>
            <MainOfferRemainDays>Осталось 45 дней</MainOfferRemainDays>
          </Col>
          <MainOfferDescription>
            Билеты от 499 рублей! Специальное предложение от авиакомпании Победа
          </MainOfferDescription>
          <MainOfferReadMore>Узнать подробности</MainOfferReadMore>
        </MainOffer>
      </MainOffersWrapper>
      <MainOffersWrapper>
        <MainOfferHeader>
          <MainOfferName>В Нью-Йорк от 20 680 ₽</MainOfferName>
        </MainOfferHeader>
        <MainOffer>
          <Col xs={6}>
            <MainOfferCompany src={lufthansa} />
          </Col>
          <Col xs={6}>
            <MainOfferPriceWrapper>
              от <MainOfferPrice>20 680 ₽</MainOfferPrice>
            </MainOfferPriceWrapper>
            <MainOfferRemainDays>Осталось 19 дней</MainOfferRemainDays>
          </Col>
          <MainOfferDescription>
            Из Москвы в США от 20680 рублей! Специальное предложение от
            авиакомпании Lufthansa
          </MainOfferDescription>
          <MainOfferReadMore>Узнать подробности</MainOfferReadMore>
        </MainOffer>
      </MainOffersWrapper>
      <MainOffersWrapper>
        <MainOfferHeader>
          <MainOfferName>В Нью-Йорк от 20 680 ₽</MainOfferName>
        </MainOfferHeader>
        <MainOffer>
          <Col xs={6}>
            <MainOfferCompany src={lufthansa} />
          </Col>
          <Col xs={6}>
            <MainOfferPriceWrapper>
              от <MainOfferPrice>20 360 ₽</MainOfferPrice>
            </MainOfferPriceWrapper>
            <MainOfferRemainDays>Осталось 19 дней</MainOfferRemainDays>
          </Col>
          <MainOfferDescription>
            Из Москвы в США от 22360 рублей! Специальное предложение от
            авиакомпании Lufthansa
          </MainOfferDescription>
          <MainOfferReadMore>Узнать подробности</MainOfferReadMore>
        </MainOffer>
      </MainOffersWrapper>
      <MainOffersNotes>
        <MainOffersAllOffers>Смотреть все спецпредложения</MainOffersAllOffers>
        <MainOffersAveragePriceInfo>
          * средняя цена по направлению
        </MainOffersAveragePriceInfo>
      </MainOffersNotes>
    </Body>
  );
}
