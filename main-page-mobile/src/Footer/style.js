import styled from "styled-components";

export const Inner = styled.section`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
  width: 320px;
  min-height: 775px;
  color: #5b5b5c;
  background: #ffffff;
  padding: 6px;
  padding-top: 26px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #e0e6e8;
`;

export const List = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 146px;
  margin-top: 12px;
  text-align: left;
`;

export const NavLink = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
`;

export const NavTitle = styled.section`
  font-family: Roboto;
  font-style: normal;
  line-height: 16px;
  font-size: 12px;
  font-weight: 600;
  color: #4a4a4a;
  margin-top: 20px;
`;

export const NavAllLinks = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  font-size: 12px;

  color: #4a4a4a;
`;

export const Bottom = styled.section`
  margin-top: 24px;
  min-height: 410px;
  width: 320px;
  padding: 6px;
  box-sizing: border-box;

  & > ${NavLink} {
    display: inline-block;
    margin-right: 6px;
  }
`;

export const SocialGroups = styled.section`
  margin-top: 20px;
  ${"" /* display: flex;
  justify-content: space-between;
  align-items: baseline; */};
  align-items: baseline;
`;

export const SocialGroup = styled.div`
  list-style-type: none;
`;

export const SocialIcon = styled.img`
  margin-right: 3px;
`;

export const LinkWrapper = styled.section`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;

export const MobileApp = styled.a`
  width: 125px;
  height: 42px;
  background: #1e292d;
  border-radius: 5px;
  color: #ffffff;
  display: block;
  margin: 10px auto;
  content: "Скачайте в ";
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 15px;
  font-size: 9px;
`;

export const MobileAppIcon = styled.img`
  position: relative;
  top: 5px;
  right: 6px;
`;

export const MobileAppTitle = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 15px;
  font-size: 12px;

  color: #ffffff;
`;

export const Copyright = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  margin-top: 25px;
  color: #5b5b5c;
`;
