import styled from "styled-components";
import calendar from "./calendar.svg";

export const Body = styled.section`
  width: 330px;
  min-height: 1290px;
  background: linear-gradient(to bottom, #f8fcff 0%, #ffffff 100%);
  color: #4a4a4a;
  padding-top: 32px;
  box-sizing: border-box;
`;

export const CalendarWrapper = styled.span`
  width: 60px;
  height: 60px;
  margin: 32px 130px 0 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e2f8ff;
  border-radius: 50%;
  box-sizing: border-box;
  margin-left: 130px;

  &::after {
    content: "";
    width: 28px;
    height: 28px;
    background: url(${calendar}) no-repeat center;
  }
`;

export const Title = styled.span`
  display: flex;
  width: 255px;
  height: 45px;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-style: Medium;
  line-height: 24px;
  text-align: center;
  margin: 20px 32px 0 33px;
  box-sizing: border-box;
`;

export const DirectionWrapper = styled.section`
  height: 130px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  padding: 6px;
  flex-wrap: wrap;
`;

export const CountryFlag = styled.img`
  width: 30px;
  height: 30px;
`;

export const DirectionTown = styled.span`
  display: flex;
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  font-weight: bold;
  line-height: 32px;
  text-align: left;
  color: #5b5b5c;
  margin-top: 20px;
  justify-content: left;
`;

export const DirectionCountry = styled.span`
  display: flex;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: bold;
  line-height: 20px;
  text-align: left;
  color: #a0b0b9;
  justify-content: left;
  position: relative;
  left: 30px;
`;

export const DirectionFromName = styled.span`
  display: flex;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: Regular;
  line-height: 20px;
  text-align: left;
  justify-content: left;
`;

export const DirectionPrice = styled.span`
  display: flex;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: Regular;
  line-height: 20px;
  color: #00bae8;
  text-align: left;
`;

export const PromoText = styled.p`
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: Regular;
  line-height: 24px;
  text-align: center;
  height: 120px;
  padding: 23px;
  box-sizing: border-box;
`;

export const PromoStatement = styled.p`
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: Regular;
  line-height: 20px;
  color: #a0b0b9;
  text-align: center;
  margin-top: 40px;
  height: 40px;
  box-sizing: border-box;
`;
