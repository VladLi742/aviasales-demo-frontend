import React from "react";
import reactFlexboxGrid, { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import articleList from "./article-list.js";

const Article = styled.article`
  margin-top: 20px;
  background: #ffffff;
  width: 320px;
  color: #4a4a4a;
  min-height: 1116px;
  padding: 6px;
`;

const Name = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 18px;
  font-size: 13px;

  color: #4a4a4a;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-top: 13px;
  margin-left: 4px;
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
`;

export default function() {
  return (
    <Article>
      {articleList.map(article => {
        return (
          <Content>
            <Row>
              <Col xs={1}>
                <Icon src={article.pic} />
              </Col>
              <Col xs={11}>
                <Name>{article.name}</Name>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Text>
                  {article.desc}
                  <ReadMore> Подробнее</ReadMore>
                </Text>
              </Col>
            </Row>
          </Content>
        );
      })}
    </Article>
  );
}
