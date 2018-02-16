import React from "react";
import reactFlexboxGrid, { Row, Col } from "react-flexbox-grid";
import {
  Header,
  Logo,
  H2,
  Form,
  Field,
  DateWrapper,
  CityWrapper,
  City,
  TextInput,
  DateInput,
  SelectPlace,
  ChangeButton,
  Button
} from "./style";
import logo from "./logo.svg";

export default function() {
  return (
    <Header>
      <Logo src={logo} alt="aviasales" width="30px;" height="29px;" />
      <H2>Поиск дешевых авиабилетов</H2>
      <Form>
        <Field>
          <TextInput placeholder="Город вылета" />
          <CityWrapper>
            <City>MOW</City>
            <ChangeButton />
          </CityWrapper>
        </Field>
        <Field>
          <TextInput placeholder="Город прибытия" />
        </Field>
        <Field>
          <DateWrapper>
            <DateInput placeholder="Туда" />
          </DateWrapper>
          <DateWrapper>
            <DateInput placeholder="Обратно" />
          </DateWrapper>
        </Field>
        <Field>
          <SelectPlace>
            <option value="">1 пассажир, эконом</option>
          </SelectPlace>
        </Field>
        <Button>Найти билеты</Button>
      </Form>
    </Header>
  );
}
