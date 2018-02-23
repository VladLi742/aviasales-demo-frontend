import React from "react";
import styled from "styled-components";
import DayPicker, { DateUtils } from "react-day-picker";
import Helmet from "react-helmet";
import { format, parse } from "date-fns";
import ru from "date-fns/locale/ru";

import "react-day-picker/lib/style.css";

import { Dates, DateField } from "../../Header/Form";
import startDate from "../Header/images/start-date.svg";

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
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье"
];

const WEEKDAYS_SHORT = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

const Wrapper = styled.section`
  display: flex;
  margin-top: 3px;
`;

export default class DropDownCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = this.getInitialState();
    this.state = { isOpen: false };
  }

  toggleOpen = () => {
    this.setState({ isOpen: true });
  };

  getInitialState() {
    return { from: undefined, to: undefined };
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
    this.setState({ isOpen: false });
  }

  // handleDayClick(day, { selected }) {
  //     if (selected) {
  //       this.setState({ selectedDay: undefined });
  //       return;
  //     }
  //     this.setState({ selectedDay: day });
  //   }

  setFirstDate = () => {
    this.setState({
      from: format(new Date(this.from), "D MMMM dd", {
        locale: ru
      })
    });
  };

  setEndDate = () => {
    this.setState({
      to: format(new Date(this.to), "D MMMM dd", {
        locale: ru
      })
    });
  };

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <Wrapper>
        <Dates search onClick={this.toggleOpen}>
          <DateField
            onChange={this.setFirstDate}
            value={from}
            placeholder="Туда"
          />
          <DateField
            onChange={this.setSecondDate}
            value={to}
            placeholder="Обратно"
          />
        </Dates>
        {this.state.isOpen && (
          <DayPicker
            numberOfMonths={this.props.numberOfMonths}
            selectedDays={[from, { from, to }]}
            modifiers={modifiers}
            onDayClick={this.handleDayClick}
            locale="ru"
            months={MONTHS}
            weekdaysLong={WEEKDAYS_LONG}
            weekdaysShort={WEEKDAYS_SHORT}
          />
        )}
        <Helmet>
          <style>{`
  .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #F4F4F4 !important;
    color: #4A4A4A;
  }

  .DayPicker {
    display: block;
    position: absolute;
    background: #FFFFFF;
    box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2), 0px 2px 4px rgba(74, 74, 74, 0.2);
    border-radius: 2px;
    z-index: 1;
    min-width: 370px;
  }

  .DayPicker-Caption {
    text-align: center;
  }

  .DayPicker-Caption > div {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold !important;
    line-height: 18px;
    font-size: 14px !important;
    text-transform: uppercase;
    color: #4A4A4A;
  }

  .DayPicker-Weekday {
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    line-height: 18px;
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
    color: #5B5B5C;
  }

  .DayPicker-Day {
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    line-height: 18px;
    font-size: 16px;
    text-align: center;
    text-transform: uppercase;
    color: #4A4A4A;
  }

  .DayPicker-NavButton--prev {
    left: 1.5rem;
  }

  .DayPicker-Day--start {

  }

  .DayPicker-Day--start::after {
    content: '';
    display: block;
    width: 100%;
    height: calc(100% + 13px);
    position: absolute;
    top: -6px;
    left: 3px;
    z-index: -2;
    box-shadow: -5px 0 0 0 white;
  }

  .DayPicker-Day {
    border-radius: 0 !important;
  }
  .DayPicker-Day--start {

  }
  ..DayPicker-Day--end {
  }
`}</style>
        </Helmet>
      </Wrapper>
    );

    // handleDayClick(day, { selected }) {
    //   if (selected) {
    //     this.setState({ selectedDay: undefined });
    //     return;
    //   }
    //   this.setState({ selectedDay: day });
    // }
    // <Dates search onClick={this.toggleOpen}>
    //   <DateField value={this.state.selectedDay} placeholder="Туда" />
    //   <DateField value={this.state.selectedDay} placeholder="Обратно" />
    // </Dates>;
    // {
    //   this.state.isOpen && <DayPicker locale="ru" months={MONTHS} weekdaysLong={WEEKDAYS_LONG} weekdaysShort={WEEKDAYS_SHORT} disabledDays={[{ after: new Date(2018, 1, 0), before: new Date(2018, 1, 17) }]} onDayClick={this.handleDayClick} selectedDays={this.state.selectedDay} />;
    // }
  }
}
