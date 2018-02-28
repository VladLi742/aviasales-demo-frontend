import React from "react";

import styled from "styled-components";

import topLine from "./top-line.jpg";

import twitter from "./twitter.svg";
import facebook from "./facebook.svg";
import vk from "./vk.svg";
import rss from "./rss.svg";

const Wrapper = styled.section`
  display: flex;
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
    flex-direction: column;
    align-items: center;
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

  @media (min-width: 768px) {
    margin-bottom: 5px;
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
  width: 61%;

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

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const SecondBLock = styled.section`
  display: flex;
  flex-direction: column;
  width: 75%;
  text-align: center;

  @media (min-width: 992px) {
    flex-direction: row;
    width: 100%;
  }
`;

const ShareIcons = styled.section`
  margin-right: 15px;
  margin-bottom: 10px;
`;

const Icon = styled.picture`
  width: 36px;
  height: 36px;
  cursor: pointer;
  margin-right: 3px;
`;

const Form = styled.form``;

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
