import React from "react";
import reactFlexboxGrid, { Row, Col } from "react-flexbox-grid";
import { Inner, List, Nav, NavTitle, NavLink, NavAllLinks } from "./style";

export default function() {
  return (
    <Inner>
      <Row>
        <List>
          <Col xs={12}>
            <NavTitle>СТРАНЫ</NavTitle>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavTitle>ГОРОДА</NavTitle>
          </Col>
        </List>
      </Row>
      <Row>
        <List>
          <Col xs={12}>
            <NavLink>Россия</NavLink>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavLink>Москва</NavLink>
          </Col>
        </List>
      </Row>
      <Row>
        <List>
          <Col xs={12}>
            <NavLink>Таиланд</NavLink>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavLink>Санкт-Петербург</NavLink>
          </Col>
        </List>
      </Row>
      <Row>
        <List>
          <Col xs={12}>
            <NavLink>Черногория</NavLink>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavLink>Симферополь</NavLink>
          </Col>
        </List>
      </Row>
      <Row>
        <List>
          <Col xs={12}>
            <NavLink>Кипр</NavLink>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavLink>Адлер</NavLink>
          </Col>
        </List>
      </Row>
      <Row>
        <List>
          <Col xs={12}>
            <NavLink>Болгария</NavLink>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavLink>Екатеринбург</NavLink>
          </Col>
        </List>
      </Row>
      <Row>
        <List>
          <Col xs={12}>
            <NavLink>Грузия</NavLink>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavLink>Лондон</NavLink>
          </Col>
        </List>
      </Row>
      <Row>
        <List>
          <Col xs={12}>
            <NavAllLinks>Все страны →</NavAllLinks>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavAllLinks>Все города →</NavAllLinks>
          </Col>
        </List>
      </Row>

      <Row>
        <List>
          <Col xs={12}>
            <NavTitle>АВИАКОМПАНИИ</NavTitle>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavTitle>АЭРОПОРТЫ</NavTitle>
          </Col>
        </List>
      </Row>
      <Row>
        <List>
          <Col xs={12}>
            <NavLink>Air Berlin</NavLink>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavLink>Шереметьево</NavLink>
          </Col>
        </List>
      </Row>
      <Row>
        <List>
          <Col xs={12}>
            <NavLink>Air France</NavLink>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavLink>Курумоч</NavLink>
          </Col>
        </List>
      </Row>
      <Row>
        <List>
          <Col xs={12}>
            <NavLink>Alitalia</NavLink>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavLink>Домодедово</NavLink>
          </Col>
        </List>
      </Row>
      <Row>
        <List>
          <Col xs={12}>
            <NavLink>Air Baltic</NavLink>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavLink>Толмачево</NavLink>
          </Col>
        </List>
      </Row>
      <Row>
        <List>
          <Col xs={12}>
            <NavLink>Emirates</NavLink>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavLink>Владивосток</NavLink>
          </Col>
        </List>
      </Row>
      <Row>
        <List>
          <Col xs={12}>
            <NavLink>KLM</NavLink>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavLink>Гамбург</NavLink>
          </Col>
        </List>
      </Row>
      <Row>
        <List>
          <Col xs={12}>
            <NavAllLinks>Все авиакомпании →</NavAllLinks>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavAllLinks>Все аэропорты →</NavAllLinks>
          </Col>
        </List>
      </Row>

      <Row>
        <List>
          <Col xs={12}>
            <NavTitle>НАПРАВЛЕНИЯ</NavTitle>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavTitle>СЕРВИСЫ</NavTitle>
          </Col>
        </List>
      </Row>
      <Row>
        <List>
          <Col xs={12}>
            <NavLink>MOW – SIP</NavLink>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavLink>Горящие авиабилеты</NavLink>
          </Col>
        </List>
      </Row>
      <Row>
        <List>
          <Col xs={12}>
            <NavLink>MOW – AER</NavLink>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavLink>Календарь низких цен</NavLink>
          </Col>
        </List>
      </Row>
      <Row>
        <List>
          <Col xs={12}>
            <NavLink>MOW – TIV</NavLink>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavLink>Карта низких цен</NavLink>
          </Col>
        </List>
      </Row>
      <Row>
        <List>
          <Col xs={12}>
            <NavLink>MOW – MRV</NavLink>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavLink>Спецпредложения</NavLink>
          </Col>
        </List>
      </Row>
      <Row>
        <List>
          <Col xs={12}>
            <NavLink>LED – MOW</NavLink>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavLink>Таблица цен</NavLink>
          </Col>
        </List>
      </Row>
      <Row>
        <List>
          <Col xs={12}>
            <NavLink>MOW – BKK</NavLink>
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavLink>Блог</NavLink>
          </Col>
        </List>
      </Row>
      <Row>
        <List>
          <Col xs={12}>
            <NavLink />
          </Col>
        </List>
        <List>
          <Col xs={12}>
            <NavLink>Помощь</NavLink>
          </Col>
        </List>
      </Row>
    </Inner>
  );
}
