import React from "react";
import reactFlexboxGrid, { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import { Link } from "./style";

import vk from "./images/vk.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import viber from "./images/viber.png";

import DownloadApp from "./DownloadApp";

const Title = styled.section`
  font-family: Roboto;
  font-style: normal;
  line-height: 16px;
  font-size: 12px;
  font-weight: 600;
  color: #4a4a4a;
  margin-top: 20px;
`;

const AllLinks = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  font-size: 12px;

  color: #4a4a4a;
`;

const LinkWrapper = styled.section`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;

const MobileApp = styled.a`
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

const MobileAppIcon = styled.img`
  position: relative;
  top: 5px;
  right: 6px;
`;

const MobileAppTitle = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 15px;
  font-size: 12px;
  color: #ffffff;
`;

const Copyright = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  margin-top: 25px;
  color: #5b5b5c;
`;
const List = styled.section`
  display: inline-block;
  margin-right: 10px;
`;
const AdditionalInfo = styled.section`
  margin-bottom: 10px;
`;

const Socials = styled.section`
  margin-bottom: 10px;
`;

const Icon = styled.img`
  display: inline-block;
  margin-right: 5px;
`;

const Links = styled.section`
  margin: 0;
  padding: 0 2%;
  margin-bottom: 5px;
`;

export default function() {
  return (
    <Links>
      <AdditionalInfo>
        <List>
          <Link>О компании</Link>
        </List>
        <List>
          <Link>Партнёрская программа</Link>
        </List>
        <List>
          <Link>Реклама</Link>
        </List>
        <List>
          <Link>Вакансии</Link>
        </List>
        <List>
          <Link>Помощь</Link>
        </List>
        <List>
          <Link>Правила</Link>
        </List>
        <List>
          <Link>White Label авиабилеты</Link>
        </List>
      </AdditionalInfo>
      <Socials>
        <List>
          <Link>
            <Icon src={vk} />Вконтакте
          </Link>
        </List>
        <List>
          <Link>
            <Icon src={facebook} />Фейсбук
          </Link>
        </List>
        <List>
          <Link>
            <Icon src={instagram} />Инстаграм
          </Link>
        </List>
        <List>
          <Link>
            <Icon src={twitter} />Твиттер
          </Link>
        </List>
        <List>
          <Link>
            <Icon src={viber} />Вайбер
          </Link>
        </List>
      </Socials>
      <div>
        <Link href="#">Поиск и бронирование отелей</Link>
      </div>
      <DownloadApp />
    </Links>
  );
}
