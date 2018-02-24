import React from "react";
import styled from "styled-components";
import DayPicker, { DateUtils } from "react-day-picker";
import "./daypicker.css";

import enhanceWithClickOutside from "react-click-outside";

import format from "date-fns/format";
import ru from "date-fns/locale/ru";

import "react-day-picker/lib/style.css";

import { Dates, DateField, Calendar } from "../../Header/Form";

import calendar from "../../Header/images/calendar.svg";
import clearDate from "../Header/images/clear-date.svg";

const WEEKDAYS_SHORT = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];

const WEEKDAYS_LONG = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота"
];

const FIRST_DAY_OF_WEEK = 1;

const Wrapper = styled.section`
  display: flex;
  position: relative;
`;

const DayPickerWrapper = styled.section`
  position: absolute;
  background: #fff;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2),
    0px 2px 4px rgba(74, 74, 74, 0.2);
  border-radius: 2px;
  top: 3px;
  z-index: 1;
  max-width: 370px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.label`
  display: flex;
  align-items: center;
  padding: 15px 0 15px 10px;
  cursor: pointer;

  &:hover {
    color: #00b0dd;
  }
`;

const Checkbox = styled.input`
  width: 40px;
  height: 24px;
  cursor: pointer;
  margin-right: 15px;
  position: relative;

  &::before {
    content: "";
    width: inherit;
    height: inherit;
    display: block;
    background: #bccdd6;
    border-radius: 100px;
  }

  &:not(:checked) {
    &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      display: block;
      background: #fff;
      border-radius: 10px;
      top: 2px;
      left: 3px;
    }
  }

  &:checked {
    &::before {
      background: #9ccc66;
    }

    &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      display: block;
      background: #fff;
      border-radius: 10px;
      top: 2px;
      right: 3px;
    }
  }
`;

const prices = {
  24: ["43 606"],
  25: ["43 606"],
  26: ["41 920"],
  27: ["42 140"],
  28: ["42 130"]
};

const Price = {
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "normal",
  fontSize: "10px",
  textAlign: "center",
  color: "#00C455",
  position: "absolute",
  right: "10px"
};

function renderDay(day) {
  const date = day.getDate();
  return (
    <div>
      <div>{date}</div>
      {prices[date] &&
        prices[date].map((price, i) => (
          <div key={i} style={Price}>
            {price}
          </div>
        ))}
    </div>
  );
}

class DropDownCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, from: "", to: "" };
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  toggleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleDayClick(day, { disabled }) {
    if (disabled) {
      return;
    }
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
    if (this.state.from) {
      this.setState({ isOpen: false });
    }
  }

  handleChangeFrom = e => {
    this.setState({ from: e.target.value });
  };

  handleChangeTo = e => {
    this.setState({ to: e.target.value });
  };

  ClearDate = e => {
    this.setState({ to: "" });
  };

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <Wrapper>
        {this.props.page === "search" ? (
          <Dates search>
            <DateField
              onClick={this.toggleOpen}
              value={
                from
                  ? format(new Date(from), "D MMMM dd", {
                      locale: ru
                    })
                  : ""
              }
              onChange={this.setFirstDate}
              placeholder="Туда"
            />
            <Calendar src={calendar} />
            <DateField
              onClick={this.toggleOpen}
              value={
                to
                  ? format(new Date(to), "D MMMM dd", {
                      locale: ru
                    })
                  : ""
              }
              onChange={this.handleChangeTo}
              placeholder="Обратно"
            />
            <Calendar src={calendar} onClick={this.ClearDate} />
          </Dates>
        ) : (
          <Dates>
            <DateField
              onClick={this.toggleOpen}
              value={
                from
                  ? format(new Date(from), "D MMMM dd", {
                      locale: ru
                    })
                  : ""
              }
              onChange={this.setFirstDate}
              placeholder="Туда"
            />
            <Calendar src={calendar} />
            <DateField
              onClick={this.toggleOpen}
              value={
                to
                  ? format(new Date(to), "D MMMM dd", {
                      locale: ru
                    })
                  : ""
              }
              onChange={this.handleChangeTo}
              placeholder="Обратно"
            />
            <Calendar src={calendar} onClick={this.ClearDate} />
          </Dates>
        )}
        {this.state.isOpen && (
          <DayPickerWrapper>
            <DayPicker
              numberOfMonths={this.props.numberOfMonths}
              selectedDays={[from, { from, to }]}
              modifiers={modifiers}
              onDayClick={this.handleDayClick}
              locale="ru"
              months={MONTHS}
              weekdaysLong={WEEKDAYS_LONG}
              weekdaysShort={WEEKDAYS_SHORT}
              disabledDays={[{ before: new Date() }]}
              renderDay={renderDay}
              toMonth={new Date(2019, 8)}
              firstDayOfWeek={FIRST_DAY_OF_WEEK}
            />
            <Title>
              <Checkbox type="checkbox" />Показать цены в одну сторону
            </Title>
          </DayPickerWrapper>
        )}
      </Wrapper>
    );
  }
}

export default enhanceWithClickOutside(DropDownCalendar);
