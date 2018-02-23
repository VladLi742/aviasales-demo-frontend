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
`;

const Socials = styled.section`
  margin-bottom: 10px;
`;

const Icon = styled.img`
  display: inline-block;
  margin-right: 5px;
`;

const Body = styled.section`
  margin: 0;
  margin-bottom: 5px;
  margin-left: 6px;

  @media (min-width: 992px) {
    padding: 0 12%;
    display: flex;
    justify-content: space-between;
  }
`;

const Links = styled.section``; // Нужен был для построения сетки на dekstop версию

const Search = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 22px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    justify-content: left;
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
          <LinkWrapper>
            <Link>
              <Icon src={vk} />Вконтакте
            </Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link>
              <Icon src={facebook} />Фейсбук
            </Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link>
              <Icon src={instagram} />Инстаграм
            </Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link>
              <Icon src={twitter} />Твиттер
            </Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link>
              <Icon src={viber} />Вайбер
            </Link>
          </LinkWrapper>
        </Socials>
        <Search>
          <Link href="#">Поиск и бронирование отелей</Link>
        </Search>
      </Links>
      <DownloadApp />
    </Body>
  );
}
