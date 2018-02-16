import styled from "styled-components";

export const Body = styled.section`
  width: 320px;
  height: 1044px;
  background: linear-gradient(to right, #00b0de 0%, #196ebd 100%);
  color: #000;
`;

export const MainOffersTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 28px;
  line-height: 33px;
  text-align: left;
  color: #fff;
  padding: 16px 43px 0 6px;
`;

export const MainOffersWrapper = styled.section`
  min-height: 134px;
  text-align: left;
  margin-left: 6px;
  margin-right: 6px;
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
`;

export const MainOfferHeader = styled.section`
  width: 308px;
  background-color: #cd2027;
`;

export const MainOfferName = styled.h4`
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  color: #fff;
  padding-left: 16px;
`;

export const MainOffer = styled.section`
  background-color: white;
  width: 100%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
`;

export const MainOfferCompany = styled.img`
  padding-top: 22px;
`;

export const MainOfferPriceWrapper = styled.section`
  width: 113px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  padding-top: 18px;
  padding-right: 16px;
  text-align: right;
`;

export const MainOfferPrice = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 20px;
  text-align: right;

  color: #5c5c5c;
`;

export const MainOfferRemainDays = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 15px;
  font-size: 12px;
  text-align: right;

  color: #d93633;
`;

export const MainOfferDescription = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  padding: 15px 8px 0;
  color: #242424;
`;

export const MainOfferReadMore = styled.button`
  background: rgba(0, 0, 0, 0.0001);
  border: 2px solid #cd1f27;
  border-radius: 3px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  margin: 35px 8px 20px;
  width: 100%;
  height: 30px;

  color: #d93533;
`;

export const MainOffersAllOffers = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  text-decoration-line: underline;

  color: #ffffff;
`;

export const MainOffersAveragePriceInfo = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;

  color: #ffffff;
`;

export const MainOffersNotes = styled.section`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5px;
`;
