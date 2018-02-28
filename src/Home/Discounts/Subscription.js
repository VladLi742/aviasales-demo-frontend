import React from "react";

import styled from "styled-components";

import topLine from "./images/top-line.jpg";

import twitter from "./images/twitter.svg";
import facebook from "./images/facebook.svg";
import vk from "./images/vk.svg";
import rss from "./images/rss.svg";

const Wrapper = styled.section`
  display: none;
  position: relative;
  justify-content: center;
  padding-top: 35px;
  padding-bottom: 24px;

  &::before {
    content: "";
    display: block;
    background: url(${topLine}) center;
    width: 100%;
    height: 7px;
    position: absolute;
    top: 0;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 992px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const Title = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;
  text-align: left;
  color: #5c5c5c;
  margin-bottom: 5px;

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const Description = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
  font-size: 16px;
  text-align: center;
  color: #5c5c5c;
  margin: 0;

  @media (min-width: 992px) {
    text-align: left;
  }
`;

const FirstBlock = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;
  max-width: 355px;

  @media (min-width: 992px) {
    margin-bottom: 0;
    align-items: left;
  }
`;

const SecondBLock = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 992px) {
    flex-direction: row;
    max-width: 535px;
  }
`;

const ShareIcons = styled.section`
  margin-right: 15px;
  margin-bottom: 10px;

  @media (min-width: 992px) {
    display: flex;
  }
`;

const Icon = styled.picture`
  width: 36px;
  height: 36px;
  cursor: pointer;
  margin-right: 3px;
`;

const Form = styled.form`
  display: flex;
`;

const Email = styled.input`
  background: #ffffff;
  border: 1px solid #a0b0b9;
  border-radius: 2px;
  padding: 7px 13px;
`;

const Button = styled.button`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  background: #ff8e41;
  border-radius: 2px;
  border: none;
  padding: 8px 20px;
  cursor: pointer;
`;

export default function() {
  return (
    <Wrapper>
      <FirstBlock>
        <Title>Хотите знать всё о скидках на авиабилеты?</Title>
        <Description>
          Вы можете подписаться на нашу рассылку через соцсети или по
          электронной почте.
        </Description>
      </FirstBlock>
      <SecondBLock>
        <ShareIcons>
          <Icon>
            <img srcSet={twitter} />
          </Icon>
          <Icon>
            <img srcSet={facebook} />
          </Icon>
          <Icon>
            <img srcSet={vk} />
          </Icon>
          <Icon>
            <img srcSet={rss} />
          </Icon>
        </ShareIcons>
        <Form>
          <Email placeholder="Ваш email" />
          <Button>Подписаться</Button>
        </Form>
      </SecondBLock>
    </Wrapper>
  );
}
