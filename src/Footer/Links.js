import React from "react";
import styled from "styled-components";
import { Link } from "./style";

import linkList from "./inner-list";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
  text-align: left;
  border-bottom: 1px solid #e0e6e8;
  margin-top: 32px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-top: 40px;
  }

  @media (min-width: 992px) {
    margin-left: 20%;
    margin-right: 20%;
  }
`;

const Links = styled.li`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom: 31px;
  align-items: flex-start;

  @media (min-width: 768px) {
    width: 25%;
  }
  @media (min-width: 992px) {
    width: 16.66%;
  }
`;

const Title = styled.h4`
  font-family: Roboto;
  font-style: normal;
  line-height: 16px;
  font-size: 12px;
  font-weight: 600;
  color: #4a4a4a;
  margin-top: 0;
`;

const AllLinks = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  text-decoration: none;
`;

export default function() {
  return (
    <List>
      {linkList.map(link => {
        return (
          <Links key={link.id}>
            <Title>{link.town}</Title>
            {link.titles.map((title, index) => {
              return (
                <Link href="#" key={index}>
                  {title}
                </Link>
              );
            })}
            <AllLinks href="#">{link.allLinks}</AllLinks>
          </Links>
        );
      })}
    </List>
  );
}
