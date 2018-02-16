import React from "react";
import reactFlexboxGrid, { Row, Col } from "react-flexbox-grid";
import {
  Body,
  CalendarWrapper,
  Title,
  DirectionWrapper,
  DirectionTown,
  DirectionCountry,
  DirectionFromName,
  DirectionPrice,
  CountryFlag,
  PromoText,
  PromoStatement
} from "./style.js";
import flagRu from "./flag-ru.svg";
import flagAm from "./flag-am.svg";
import flagMd from "./flag-md.svg";

export default function() {
  return (
    <Body>
      <CalendarWrapper />
      <Title>Лучшие цены на авиабилеты за последний месяц</Title>
      <DirectionTown>
        <CountryFlag src={flagRu} />Симферополь (Крым)
      </DirectionTown>
      <DirectionCountry>КРЫМ</DirectionCountry>
      <DirectionWrapper>
        <Col xs={8}>
          <DirectionFromName>Из Москвы</DirectionFromName>
        </Col>
        <Col xs={4}>
          <DirectionPrice>от 4 813 ₽</DirectionPrice>
        </Col>
        <Col xs={8}>
          <DirectionFromName>Из Санкт-Петербурга</DirectionFromName>
        </Col>
        <Col xs={4}>
          <DirectionPrice>от 7 857 ₽</DirectionPrice>
        </Col>
        <Col xs={8}>
          <DirectionFromName>Из Новосибирска</DirectionFromName>
        </Col>
        <Col xs={4}>
          <DirectionPrice>от 15 127 ₽</DirectionPrice>
        </Col>
        <Col xs={8}>
          <DirectionFromName>Из Екатеринбурга</DirectionFromName>
        </Col>
        <Col xs={4}>
          <DirectionPrice>от 9 275 ₽</DirectionPrice>
        </Col>
        <Col xs={8}>
          <DirectionFromName>Из Челябинска</DirectionFromName>
        </Col>
        <Col xs={4}>
          <DirectionPrice>от 9 148 ₽</DirectionPrice>
        </Col>
      </DirectionWrapper>
      <DirectionTown>
        <CountryFlag src={flagAm} />Ереван
      </DirectionTown>
      <DirectionCountry>АРМЕНИЯ</DirectionCountry>
      <DirectionWrapper>
        <Col xs={8}>
          <DirectionFromName>Из Москвы</DirectionFromName>
        </Col>
        <Col xs={4}>
          <DirectionPrice>от 6 758 ₽</DirectionPrice>
        </Col>
        <Col xs={8}>
          <DirectionFromName>Из Санкт-Петербурга</DirectionFromName>
        </Col>
        <Col xs={4}>
          <DirectionPrice>от 9 932 ₽</DirectionPrice>
        </Col>
        <Col xs={8}>
          <DirectionFromName>Из Сочи</DirectionFromName>
        </Col>
        <Col xs={4}>
          <DirectionPrice>от 11 951 ₽</DirectionPrice>
        </Col>
        <Col xs={8}>
          <DirectionFromName>Из Краснодара</DirectionFromName>
        </Col>
        <Col xs={4}>
          <DirectionPrice>от 11 741 ₽</DirectionPrice>
        </Col>
        <Col xs={8}>
          <DirectionFromName>Из Ростова-на-Дону</DirectionFromName>
        </Col>
        <Col xs={4}>
          <DirectionPrice>от 11 956 ₽</DirectionPrice>
        </Col>
      </DirectionWrapper>
      <DirectionTown>
        <CountryFlag src={flagMd} />Кишинёв
      </DirectionTown>
      <DirectionCountry>МОЛДАВИЯ</DirectionCountry>
      <DirectionWrapper>
        <Col xs={8}>
          <DirectionFromName>Из Москвы</DirectionFromName>
        </Col>
        <Col xs={4}>
          <DirectionPrice>от 8 319 ₽</DirectionPrice>
        </Col>
        <Col xs={8}>
          <DirectionFromName>Из Санкт-Петербурга</DirectionFromName>
        </Col>
        <Col xs={4}>
          <DirectionPrice>от 10 800 ₽</DirectionPrice>
        </Col>
        <Col xs={8}>
          <DirectionFromName>Из Краснодара</DirectionFromName>
        </Col>
        <Col xs={4}>
          <DirectionPrice>от 12 098 ₽</DirectionPrice>
        </Col>
        <Col xs={8}>
          <DirectionFromName>Из Сургута</DirectionFromName>
        </Col>
        <Col xs={4}>
          <DirectionPrice>от 16 277 ₽</DirectionPrice>
        </Col>
        <Col xs={8}>
          <DirectionFromName>Из Нового Уренгоя</DirectionFromName>
        </Col>
        <Col xs={4}>
          <DirectionPrice>от 15 987 ₽</DirectionPrice>
        </Col>
      </DirectionWrapper>
      <PromoText>
        Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран
        мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и 728
        авиакомпаний.
      </PromoText>
      <PromoStatement>
        Цены, найденные пользователями за последние 48 часов, не являются
        офертой.
      </PromoStatement>
    </Body>
  );
}
