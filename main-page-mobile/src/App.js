import React, { Component } from "react";
import reactFlexboxGrid, { Row, Col } from "react-flexbox-grid";
import normalize from "normalize.css";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import "./App.css";
import {
  Header,
  Logo,
  H2,
  Main,
  Wrapper,
  DateWrapper,
  CityWrapper,
  Input,
  City,
  TextInput,
  DateInput,
  Select,
  SelectPlace,
  ChangeButton,
  Button,
  TopDestionations,
  Compass
} from "./Search";

class App extends Component {
  render() {
    return (
      <Header>
        <Logo />
        <Main>
          <H2>Поиск дешевых авиабилетов</H2>
          <Wrapper>
            <TextInput placeholder="Город вылета" />
            <CityWrapper>
              <City>MOW</City>
              <ChangeButton />
            </CityWrapper>
          </Wrapper>
          <Wrapper>
            <TextInput placeholder="Город прибытия" />
          </Wrapper>
          <Wrapper>
            <DateWrapper>
              <DateInput placeholder="Туда" />
            </DateWrapper>
            <DateWrapper>
              <DateInput placeholder="Обратно" />
            </DateWrapper>
          </Wrapper>
          <Wrapper>
            <SelectPlace>
              <option value="">1 пассажир, эконом</option>
            </SelectPlace>
          </Wrapper>
          <Wrapper>
            <Button>Найти билеты</Button>
          </Wrapper>
        </Main>
      </Header>
    );
  }
}

export default App;
