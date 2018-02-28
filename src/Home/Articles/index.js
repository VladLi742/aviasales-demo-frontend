import React from "react";
import styled from "styled-components";
import list from "./list.js";

const Article = styled.article`
  background: #ffffff;
  color: #4a4a4a;
  padding: 6px;

  @media (min-width: 992px) {
    padding: 5px 1% 30px;
  }

  @media (min-width: 1200px) {
    padding: 5px 11% 30px;
  }
`;

const Title = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 18px;
  font-size: 13px;
  color: #4a4a4a;
  padding-left: 22px;
  margin-top: 0;
  text-transform: uppercase;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  position: relative;
  top: 21px;
`;

const Content = styled.section`
  padding: 0px 6px;
  text-align: left;
`;

const Text = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;

  color: #4a4a4a;
`;

const ReadMore = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  color: #00ace2;
  cursor: pointer;

  &:hover {
    color: #ff9d1b;
    text-decoration: underline;
  }
`;

export default function() {
  return (
    <Article>
      {list.map(article => {
        return (
          <Content key={article.id}>
            <Icon src={article.pic} />
            <Title>{article.title}</Title>
            <Text>
              {article.desc}
              <ReadMore href="#" title={article.title}>
                Подробнее
              </ReadMore>
            </Text>
          </Content>
        );
      })}
    </Article>
  );
}
