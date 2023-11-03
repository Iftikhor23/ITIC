import styled from "styled-components";
import bgImg1 from "../../assets/images/aboutBgImage.svg";
import bgImg2 from "../../assets/images/aboutBgImg2.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 110vw;
  height: 100vh;
  background-color: #050919;
  background-image:  url(${bgImg2}),url(${bgImg1});
  background-position: calc(50% - 324px) calc(50% - 73px), calc(50% - -678px) calc(50% - 32px) ;
  background-repeat: no-repeat;
  background-size: 1201px ;
  padding-right: 586px;
  padding-left: 287px;

  @media screen and (max-width: 840px) {
    height: 645px;
    width: 100%;
    justify-content: flex-start;
    padding: 40px;
  }

  @media screen and (max-width: 653px) {
    height: 610px;
    width: 50%;
    justify-content: center;
  }
`;

Container.Wrapper = styled.div`
  display: flex;
  gap: 87px;

  @media screen and (max-width: 840px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
  }

  @media screen and (max-width: 653px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

Container.Paragraph = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  max-width: 706px;

  @media screen and (max-width: 840px) {
    width: 640px;
    font-size: 24px;
    letter-spacing: 0;
    width: 646px;
  }

  @media screen and (max-width: 653px) {
    font-size: 14px;
    letter-spacing: 0;
    line-height: 23px;
    text-align: center;
    width: 326px;
  }
`;

Container.Numbers = styled.div`
  display: flex;
  align-items: center;
  gap: 72px;

  @media screen and (max-width: 653px) {
    flex-direction: column;
    gap: 32px;
  }
`;

Container.Num = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #ffffff;
  font-size: 56px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
  span {
    color: #ffffff;
    font-family: "SF Pro Display-Regular", Helvetica;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    opacity: 0.6;
  }

  @media screen and (max-width: 653px) {
    font-size: 32px;
    span {
      font-size: 14px;
    }
  }
`;

Container.Data = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
export const HeadingAbout = styled.h1`
  font-size: 72px;
  font-weight: 500;
  margin: 5px;
  width: 100%;
  max-width: 309px;
  background: -webkit-linear-gradient(left, black, #fff, black);
  background-size: 1600px 200px;
  -webkit-background-clip: text;
  background-clip: text;
  /* text-fill-color: transparent; */
  -webkit-text-fill-color: transparent;
  background-size: 500% auto;
  animation: textShine 2s linear infinite;

  @keyframes textShine {
    0% {
      background-position: 0 1600px;
    }
    100% {
      background-position: 1600px 0;
    }
  }

  @media only screen and (max-width: 768px) {
    font-size: 42px;
  }

  @media only screen and (max-width: 840px) {
    font-size: 56px;
  }

  @media only screen and (max-width: 653px) {
    font-size: 42px;
  }
`;
