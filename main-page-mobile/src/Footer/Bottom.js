import React from "react";
import reactFlexboxGrid, { Row, Col } from "react-flexbox-grid";
import {
  Bottom,
  SocialGroups,
  SocialGroup,
  SocialIcon,
  NavLink,
  LinkWrapper,
  MobileApp,
  MobileAppIcon,
  MobileAppTitle,
  Copyright
} from "./style";

import vk from "./images/vk.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import viber from "./images/viber.png";

import appleStore from "./images/apple-store.png";
import googlePlay from "./images/google-play.png";
import windowsPhone from "./images/windows-phone.png";

export default function() {
  return (
    <Bottom>
      <NavLink>О компании</NavLink>
      <NavLink>Партнёрская программа</NavLink>
      <NavLink>Реклама</NavLink>
      <NavLink>Вакансии</NavLink>
      <NavLink>Помощь</NavLink>
      <NavLink>Правила</NavLink>
      <NavLink>White Label авиабилеты</NavLink>
      <SocialGroups>
        <SocialGroup>
          {/* <SocialIcon src={vk} /> */}
          <NavLink>Вконтакте</NavLink>
        </SocialGroup>
        <SocialGroup>{/* <SocialIcon src={facebook} /> */}</SocialGroup>
        <NavLink>Фейсбук</NavLink>
        {/* <SocialIcon src={instagram} /> */}
        <SocialGroup>
          <NavLink>Инстаграм</NavLink>
        </SocialGroup>
        {/* <SocialIcon src={twitter} /> */}
        <SocialGroup>
          <NavLink>Твиттер</NavLink>
        </SocialGroup>
        {/* <SocialIcon src={viber} /> */}
        <SocialGroup>
          <NavLink>Вайбер</NavLink>
        </SocialGroup>
      </SocialGroups>
      <LinkWrapper>
        <NavLink>Поиск и бронирование отелей</NavLink>
      </LinkWrapper>
      <MobileApp>
        <MobileAppIcon src={appleStore} />Скачайте в
        <MobileAppTitle>App Store</MobileAppTitle>
      </MobileApp>
      <MobileApp>
        <MobileAppIcon src={googlePlay} />Скачайте в
        <MobileAppTitle>Google Play</MobileAppTitle>
      </MobileApp>
      <MobileApp>
        <MobileAppIcon src={windowsPhone} />
        <MobileAppTitle>Windows Phone</MobileAppTitle>
      </MobileApp>
      <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
    </Bottom>
  );
}
