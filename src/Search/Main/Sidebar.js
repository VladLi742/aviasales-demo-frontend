import React from "react";
import styled from "styled-components";

import reset from "./images/reset-filters.svg";
import tick from "./images/tick.svg";
import arrow from "./images/arrow.svg";
import minimized from "./images/minimized.svg";
import plane from "./images/airplane.svg";

import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const ResetAllFilters = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 52px;
  font-size: 12px;
  text-transform: uppercase;
  color: #00bde4;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  background-color: #fff;
  border: 1px solid #a0b0b9;
  box-sizing: border-box;
  border-radius: 4px;
  margin-right: 5px;
  position: relative;
  cursor: pointer;

  &:checked {
    &::before {
      content: "";
      display: block;
      position: absolute;
      background: url(${tick}) no-repeat center;
      background-color: #e1f8ff;
      border: 1px solid #00ace2;
      border-radius: 4px;
      width: inherit;
      height: inherit;
    }
  }
`;

const SideBar = styled.section`
  display: none;
  margin-right: 15px;
  background: #ffffff;
  border-radius: 4px;
  flex-direction: column;

  @media (min-width: 992px) {
    display: flex;
    margin-bottom: 61px;
  }

  & > :last-child {
    padding-top: 0;
  }
`;

const ResetFilters = styled.img`
  display: ${props => (props.active ? "block" : "none")};
  width: 16px;
  height: 16px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`;

const Tab = styled.section`
  padding: 16px 16px 0 16px;
  border-bottom: 1px #ddd solid;
  box-sizing: border-box;
`;

const Head = styled.section`
  padding-bottom: 15px;
  position: relative;
`;

const Title = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  text-transform: uppercase;
  color: #5b5b5c;
`;

const DropDownArrow = styled.img`
  width: ${props => (props.minimized ? "6px" : "10px")};
  height: ${props => (props.minimized ? "11px" : "5px")};
  margin-right: 5px;
  cursor: pointer;
`;

const Content = styled.section`
  padding-bottom: 25px;
`;

const Field = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.section`
  display: flex;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 36px;
  font-size: 12px;
  color: #4a4a4a;
`;

const Price = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 36px;
  font-size: 12px;
  text-align: right;

  color: #a0b0b9;
`;

const SubTitle = styled.section`
  display: flex;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 18px;
  font-size: 12px;
  color: #323333;
  margin-bottom: 25px;
  margin-bottom: 15px;
`;

const Departure = styled.span``;

const Arrival = styled.span``;

const Plane = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 5px;
  margin-right: 5px;
`;

const Details = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > ${Label} {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: 18px;
    font-size: 12px;
    color: #323333;
  }
`;

const Time = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Description = styled.p`
  max-width: 250px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
`;

export default function() {
  return (
    <SideBar>
      <Tab>
        <Head>
          <DropDownArrow src={arrow} />
          <Title>Пересадки</Title>
          <ResetFilters src={reset} active />
        </Head>

        <Content>
          <Field>
            <Label>
              <Checkbox type="checkbox" active />
              Все
            </Label>
          </Field>
          <Field>
            <Label>
              <Checkbox type="checkbox" active />
              Без пересадок
            </Label>
            <Price>7 712 ₽</Price>
          </Field>
          <Field>
            <Label>
              <Checkbox type="checkbox" />
              1 пересадка
            </Label>
            <Price>11 150 ₽</Price>
          </Field>
          <Field>
            <Label>
              <Checkbox type="checkbox" />
              2 пересадки
            </Label>
            <Price>16 821 ₽</Price>
          </Field>
          <Field>
            <Label>
              <Checkbox type="checkbox" />
              3 пересадки
            </Label>
            <Price>23 986 ₽</Price>
          </Field>
        </Content>
      </Tab>

      <Tab>
        <Head>
          <DropDownArrow src={arrow} />
          <Title>Время вылета и прибытия</Title> <ResetFilters src={reset} />
        </Head>
        <Content>
          <SubTitle>
            <Departure>Москва</Departure>
            <Plane src={plane} />
            <Arrival>Барселона</Arrival>
          </SubTitle>
          <Field>
            <Details>
              <Label>Вылет из Москвы:</Label>
              <Time>
                <Label>c 00:05, 24 фев</Label>
                <Label>до 23:45, 24 фев</Label>
              </Time>
            </Details>
          </Field>
          <Field>
            <Slider />
            <Range />
          </Field>
          <Field>
            <Details>
              <Label>Прибытие в Барселону:</Label>
              <Time>
                <Label>c 03:05, 24 фев</Label>
                <Label>до 13:50, 26 фев</Label>
              </Time>
            </Details>
          </Field>
          <Field>
            <Slider />
            <Range />
          </Field>

          <SubTitle>
            <Departure>Барселона</Departure>
            <Plane src={plane} />
            <Arrival>Москва</Arrival>
          </SubTitle>
          <Field>
            <Details>
              <Label>Вылет из Барселоны:</Label>
              <Time>
                <Label>c 06:00, 3 мар</Label>
                <Label>до 23:45, 3 мар</Label>
              </Time>
            </Details>
          </Field>
          <Field>
            <Slider />
            <Range />
          </Field>
          <Field>
            <Details>
              <Label>Прибытие в Москву:</Label>
              <Time>
                <Label>c 15:00, 3 мар</Label>
                <Label>до 09:55, 5 мар</Label>
              </Time>
            </Details>
          </Field>
          <Field>
            <Slider />
            <Range />
          </Field>
        </Content>
      </Tab>

      <Tab>
        <Head>
          <DropDownArrow src={minimized} minimized />
          <Title>Багаж</Title> <ResetFilters src={reset} />
        </Head>
      </Tab>

      <Tab>
        <Head>
          <DropDownArrow src={minimized} minimized />
          <Title>Длительность пересадки</Title> <ResetFilters src={reset} />
        </Head>
      </Tab>

      <Tab>
        <Head>
          <DropDownArrow src={minimized} minimized />
          <Title>Время в пути</Title> <ResetFilters src={reset} />
        </Head>
        <Content>
          <SubTitle>
            <Departure>Москва</Departure>
            <Plane src={plane} />
            <Arrival>Барселона</Arrival>
          </SubTitle>
          <Field>
            <Details>
              <Time>
                <Label>от 04ч 20м</Label>
                <Label>до 48ч 50м</Label>
              </Time>
            </Details>
          </Field>
          <Field>
            <Slider />
            <Range />
          </Field>
          <SubTitle>
            <Departure>Барселона</Departure>
            <Plane src={plane} />
            <Arrival>Москва</Arrival>
          </SubTitle>
          <Field>
            <Details>
              <Time>
                <Label>от 04ч 10м</Label>
                <Label>до 41ч 20м</Label>
              </Time>
            </Details>
          </Field>
          <Field>
            <Slider />
            <Range />
          </Field>
        </Content>
      </Tab>

      <Tab>
        <Head>
          <DropDownArrow src={arrow} />
          <Title>Авиакомпании</Title> <ResetFilters src={reset} />
        </Head>
        <Content>
          <Field>
            <Label>
              <Checkbox type="checkbox" />
              Несколько авиакомпаний
            </Label>
          </Field>
          <Field>
            <Description>
              Показывать билеты с перелетами, выполняемыми несколькими
              авиакомпаниями, включая выбранную
            </Description>
          </Field>
          <SubTitle>Альянсы</SubTitle>
          <Field>
            <Label>
              <Checkbox type="checkbox" active />
              Все
            </Label>
          </Field>
          <Field>
            <Label>
              <Checkbox type="checkbox" active />
              Star Alliance
            </Label>
            <Price>11 150 ₽</Price>
          </Field>
          <Field>
            <Label>
              <Checkbox type="checkbox" active />
              OneWorld
            </Label>
            <Price>12 370 ₽</Price>
          </Field>
          <Field>
            <Label>
              <Checkbox type="checkbox" active />
              SkyTeam
            </Label>
            <Price>16 290 ₽</Price>
          </Field>
          <SubTitle>Авиакомпании</SubTitle>
          <Field>
            <Label>
              <Checkbox type="checkbox" active />
              Все
            </Label>
          </Field>
          <Field>
            <Label>
              <Checkbox type="checkbox" active />
              Aegean Airlines
            </Label>
            <Price>20 357 ₽</Price>
          </Field>
          <Field>
            <Label>
              <Checkbox type="checkbox" active />
              Air Algerie
            </Label>
            <Price>29 105 ₽</Price>
          </Field>
          <Field>
            <Label>
              <Checkbox type="checkbox" active />
              Air Europa
            </Label>
            <Price>22 202 ₽</Price>
          </Field>
          <Field>
            <Label>
              <Checkbox type="checkbox" active />
              Air France
            </Label>
            <Price>17 050 ₽</Price>
          </Field>
          <Field>
            <Label>
              <Checkbox type="checkbox" active />
              Air Moldova
            </Label>
            <Price>22 613 ₽</Price>
          </Field>
          <Field>
            <Label>
              <Checkbox type="checkbox" active />
              Alitalia
            </Label>
            <Price>22 717 ₽</Price>
          </Field>
          <Field>
            <Label>
              <Checkbox type="checkbox" active />
              Alitalia CityLiner
            </Label>
            <Price>20 271 ₽</Price>
          </Field>
          <Field>
            <Label>
              <Checkbox type="checkbox" active />
              Belle Air
            </Label>
            <Price>18 371 ₽</Price>
          </Field>
          <Field>
            <Label>
              <Checkbox type="checkbox" active />
              British Airways
            </Label>
            <Price>23 839 ₽</Price>
          </Field>
          <Field>
            <Label>
              <Checkbox type="checkbox" active />
              Brussels Airlines
            </Label>
            <Price>11 150 ₽</Price>
          </Field>
          <Field>
            <Label>
              <Checkbox type="checkbox" active />
              Bulgaria Air
            </Label>
            <Price>20 114 ₽</Price>
          </Field>
        </Content>
      </Tab>

      <Tab>
        <Head>
          <DropDownArrow src={minimized} minimized />
          <Title>Аэропорты</Title> <ResetFilters src={reset} />
        </Head>
      </Tab>

      <Tab>
        <Head>
          <DropDownArrow src={minimized} minimized />
          <Title>Аэропорт пересадки</Title> <ResetFilters src={reset} />
        </Head>
      </Tab>

      <Tab>
        <Head>
          <DropDownArrow src={minimized} minimized />
          <Title>Агенства</Title> <ResetFilters src={reset} />
        </Head>
      </Tab>

      <Tab>
        <Head>
          <ResetAllFilters>Сбросить все фильтры</ResetAllFilters>
          <ResetAllFilters src={reset} active />
        </Head>
      </Tab>
    </SideBar>
  );
}
