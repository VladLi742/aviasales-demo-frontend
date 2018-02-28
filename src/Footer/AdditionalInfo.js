import React from "react";
import styled from "styled-components";
import { Link } from "./style";

import vk from "./images/vk.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import viber from "./images/viber.png";

import DownloadApp from "./DownloadApp";

const LinkWrapper = styled.section`
  display: inline-block;
  margin-right: 20px;
`;

const AdditionalInfo = styled.section`
  margin-bottom: 10px;

  @media (min-width: 992px) {
    max-width: 600px;
  }

  @media (min-width: 1200px) {
    max-width: unset;
  }
`;

const Socials = styled.section`
  margin-bottom: 10px;

  @media (min-width: 768px) {
    display: flex;
    margin-bottom: 0;
  }
`;

const Social = styled.section`
  display: inline-block;

  @media (min-width: 768px) {
    margin-right: 30px;
  }
`;

const FirstLine = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    justify-content: unset;
    margin-bottom: 0;
  }
`;

const SecondLine = styled.section`
  display: flex;
  justify-content: space-between;

  & > ${Social}:last-child {
    visibility: hidden;
  }

  @media (min-width: 768px) {
    justify-content: unset;

    & > ${Social}:last-child {
      display: none;
    }
  }
`;

const Icon = styled.img`
  display: inline-block;
  margin-right: 5px;
`;

const Body = styled.section`
  margin: 0;
  margin-bottom: 5px;
  padding-left: 6px;
  padding-right: 6px;

  @media (min-width: 992px) {
    padding: 0 1%;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 1200px) {
    padding: 0 11%;
    display: flex;
    justify-content: space-between;
  }
`;

const Links = styled.section``; // Нужен был для построения сетки на dekstop версию

const Search = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 22px;

  & > ${Link} {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    justify-content: left;

    & > ${Link} {
      margin-bottom: 15px;
    }
  }
`;

export default function() {
  return (
    <Body>
      <Links>
        <AdditionalInfo>
          <LinkWrapper>
            <Link>О компании</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link>Партнёрская программа</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link>Реклама</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link>Вакансии</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link>Помощь</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link>Правила</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link>White Label авиабилеты</Link>
          </LinkWrapper>
        </AdditionalInfo>
        <Socials>
          <FirstLine>
            <Social>
              <Link>
                <Icon src={vk} />Вконтакте
              </Link>
            </Social>
            <Social>
              <Link>
                <Icon src={facebook} />Фейсбук
              </Link>
            </Social>
            <Social>
              <Link>
                <Icon src={instagram} />Инстаграм
              </Link>
            </Social>
          </FirstLine>
          <SecondLine>
            <Social>
              <Link>
                <Icon src={twitter} />Твиттер
              </Link>
            </Social>
            <Social>
              <Link>
                <Icon src={viber} />Вайбер
              </Link>
            </Social>
            <Social>
              <Link>
                <Icon src={viber} />Вайбер
              </Link>
            </Social>
          </SecondLine>
        </Socials>
        <Search>
          <Link href="#">Поиск и бронирование отелей</Link>
        </Search>
      </Links>
      <DownloadApp />
    </Body>
  );
}
