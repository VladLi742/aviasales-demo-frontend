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
  City,
  TextInput,
  DateInput,
  SelectPlace,
  ChangeButton,
  Button,
  TopDestionations,
  CompassWrapper,
  Compass,
  TitleWrapper,
  TownWrapper,
  Pencil,
  CategoryWrapper,
  CategoryTitle,
  Category,
  CategoryIcon,
  DestinationCardWrapper,
  DestinationCard,
  DestinationCardImg,
  DestinationCardTown,
  DestinationCardCountry,
  DestinationCardFindByPrice,
  DestinationCardDate,
  DestinationCardDescription,
  DestinationCardRoute,
  DestinationCardDetails
} from "./Search";

import krasnodar from "./krasnodar.jpg";
import sochiAdler from "./sochi-adler.jpg";
import petersburg from "./petersburg.jpg";
import mineralWaters from "./mineral-waters.jpg";
import simferopol from "./simferopol.jpg";
import barcelona from "./barcelona.jpg";

class App extends Component {
  render() {
    return (
      // <Header>
      //   <Logo />
      //   <Main>
      //     <H2>Поиск дешевых авиабилетов</H2>
      //     <Wrapper>
      //       <TextInput placeholder="Город вылета" />
      //       <CityWrapper>
      //         <City>MOW</City>
      //         <ChangeButton />
      //       </CityWrapper>
      //     </Wrapper>
      //     <Wrapper>
      //       <TextInput placeholder="Город прибытия" />
      //     </Wrapper>
      //     <Wrapper>
      //       <DateWrapper>
      //         <DateInput placeholder="Туда" />
      //       </DateWrapper>
      //       <DateWrapper>
      //         <DateInput placeholder="Обратно" />
      //       </DateWrapper>
      //     </Wrapper>
      //     <Wrapper>
      //       <SelectPlace>
      //         <option value="">1 пассажир, эконом</option>
      //       </SelectPlace>
      //     </Wrapper>
      //     <Wrapper>
      //       <Button>Найти билеты</Button>
      //     </Wrapper>
      //   </Main>
      // </Header>
      <TopDestionations>
        <CompassWrapper>
          <Compass />
        </CompassWrapper>
        <TitleWrapper>
          Популярные направления перелетов из города{" "}
          <TownWrapper>
            Москва <Pencil />
          </TownWrapper>
        </TitleWrapper>
        <CategoryWrapper>
          <Category>
            <CategoryIcon />
            <CategoryTitle>КУДА УГОДНО</CategoryTitle>
          </Category>
          <Category>
            <CategoryIcon />
            <CategoryTitle>CОЛНЦЕ И МОРЕ</CategoryTitle>
          </Category>
          <Category>
            <CategoryIcon />
            <CategoryTitle>ШОПИНГ, ГОРОД</CategoryTitle>
          </Category>
          <Category>
            <CategoryIcon />
            <CategoryTitle>КУЛЬТУРА И ИСТОРИЯ</CategoryTitle>
          </Category>
          <Category>
            <CategoryIcon />
            <CategoryTitle>НОЧНАЯ ЖИЗНЬ</CategoryTitle>
          </Category>
          <Category>
            <CategoryIcon />
            <CategoryTitle>ОТДЫХ С ДЕТЬМИ</CategoryTitle>
          </Category>
        </CategoryWrapper>
        <DestinationCardWrapper>
          <DestinationCard>
            <DestinationCardImg src={krasnodar} width="309" height="176" />
            <DestinationCardDescription>
              <DestinationCardRoute>
                <DestinationCardTown>Краснодар</DestinationCardTown>
                <DestinationCardCountry>РОССИЯ</DestinationCardCountry>
              </DestinationCardRoute>
              <DestinationCardDetails>
                <DestinationCardFindByPrice>
                  Найти от 1 212 ₽
                </DestinationCardFindByPrice>
                <DestinationCardDate>18 марта</DestinationCardDate>
              </DestinationCardDetails>
            </DestinationCardDescription>
          </DestinationCard>
          <DestinationCard>
            <DestinationCardImg src={sochiAdler} width="309" height="176" />
            <DestinationCardDescription>
              <DestinationCardRoute>
                <DestinationCardTown>Сочи (Адлер)</DestinationCardTown>
                <DestinationCardCountry>РОССИЯ</DestinationCardCountry>
              </DestinationCardRoute>
              <DestinationCardDetails>
                <DestinationCardFindByPrice>
                  Найти от 1 334 ₽
                </DestinationCardFindByPrice>
                <DestinationCardDate>27 марта</DestinationCardDate>
              </DestinationCardDetails>
            </DestinationCardDescription>
          </DestinationCard>
          <DestinationCard>
            <DestinationCardImg src={petersburg} width="309" height="176" />
            <DestinationCardDescription>
              <DestinationCardRoute>
                <DestinationCardTown>Санкт-Петербург</DestinationCardTown>
                <DestinationCardCountry>РОССИЯ</DestinationCardCountry>
              </DestinationCardRoute>
              <DestinationCardDetails>
                <DestinationCardFindByPrice>
                  Найти от 1 508 ₽
                </DestinationCardFindByPrice>
                <DestinationCardDate>19 февраля</DestinationCardDate>
              </DestinationCardDetails>
            </DestinationCardDescription>
          </DestinationCard>
          <DestinationCard>
            <DestinationCardImg src={mineralWaters} width="309" height="176" />
            <DestinationCardDescription>
              <DestinationCardRoute>
                <DestinationCardTown>Минеральные Воды</DestinationCardTown>
                <DestinationCardCountry>РОССИЯ</DestinationCardCountry>
              </DestinationCardRoute>
              <DestinationCardDetails>
                <DestinationCardFindByPrice>
                  Найти от 2 074 ₽
                </DestinationCardFindByPrice>
                <DestinationCardDate>13 марта</DestinationCardDate>
              </DestinationCardDetails>
            </DestinationCardDescription>
          </DestinationCard>
          <DestinationCard>
            <DestinationCardImg src={simferopol} width="309" height="176" />
            <DestinationCardDescription>
              <DestinationCardRoute>
                <DestinationCardTown>Симферополь</DestinationCardTown>
                <DestinationCardCountry>КРЫМ</DestinationCardCountry>
              </DestinationCardRoute>
              <DestinationCardDetails>
                <DestinationCardFindByPrice>
                  Найти от 2 407 ₽
                </DestinationCardFindByPrice>
                <DestinationCardDate>13 марта</DestinationCardDate>
              </DestinationCardDetails>
            </DestinationCardDescription>
          </DestinationCard>
          <DestinationCard>
            <DestinationCardImg src={barcelona} width="309" height="176" />
            <DestinationCardDescription>
              <DestinationCardRoute>
                <DestinationCardTown>Барселона</DestinationCardTown>
                <DestinationCardCountry>ИСПАНИЯ</DestinationCardCountry>
              </DestinationCardRoute>
              <DestinationCardDetails>
                <DestinationCardFindByPrice>
                  Найти от 4 247 ₽
                </DestinationCardFindByPrice>
                <DestinationCardDate>24 марта</DestinationCardDate>
              </DestinationCardDetails>
            </DestinationCardDescription>
          </DestinationCard>
        </DestinationCardWrapper>
      </TopDestionations>
    );
  }
}

export default App;
