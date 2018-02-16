import React from "react";
import reactFlexboxGrid, { Row, Col } from "react-flexbox-grid";
import {
  Body,
  MobileAppTitle,
  MobileAppStarsWrapper,
  MobileAppStars,
  MobileAppListOSWrapper,
  MobileAppOSWrapper,
  MobileAppOSIcon,
  MobileAppOSTitle,
  MobileAppStarsTitle,
  MobileAppPhone,
  MobileAppPhoneWrapper
} from "./style.js";

import raiting from "./raiting.svg";
import apple from "./apple.svg";
import android from "./android.svg";
import winPhone from "./win-phone.svg";
import mobileApp from "./mobile-app.png";

export default function() {
  return (
    <Body>
      <MobileAppTitle>Скачай мобильное приложение Aviasales.ru</MobileAppTitle>
      <MobileAppStarsWrapper>
        <MobileAppStars src={raiting} />
        <MobileAppStarsTitle>Более 103 000 оценок</MobileAppStarsTitle>
      </MobileAppStarsWrapper>
      <MobileAppPhoneWrapper>
        <Row>
          <Col xs={12}>
            <MobileAppPhone src={mobileApp} />
          </Col>
        </Row>
        <Row>
          <MobileAppListOSWrapper>
            <Col xs={12}>
              <MobileAppOSWrapper>
                <MobileAppOSIcon src={apple} />
                <MobileAppOSTitle>iPhone или iPad</MobileAppOSTitle>
              </MobileAppOSWrapper>
            </Col>
          </MobileAppListOSWrapper>
          <MobileAppListOSWrapper>
            <Col xs={12}>
              <MobileAppOSWrapper>
                <MobileAppOSIcon src={android} />
                <MobileAppOSTitle>Android</MobileAppOSTitle>
              </MobileAppOSWrapper>
            </Col>
          </MobileAppListOSWrapper>
          <MobileAppListOSWrapper>
            <Col xs={12}>
              <MobileAppOSWrapper>
                <MobileAppOSIcon src={winPhone} />
                <MobileAppOSTitle>Windows Phone</MobileAppOSTitle>
              </MobileAppOSWrapper>
            </Col>
          </MobileAppListOSWrapper>
        </Row>
      </MobileAppPhoneWrapper>
    </Body>
  );
}
