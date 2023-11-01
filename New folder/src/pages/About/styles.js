import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 115vw;
  height: 100vh;
  /* background-color: #050919; */

  @media screen and (max-width: 840px) {
    height: fit-content;
    width: 100%;
    justify-content: flex-start;
    padding: 40px;
  }

  @media screen and (max-width: 653px) {
    height: fit-content;
    width: 100%;
    padding: 24px;
    justify-content: center;
  }
`;

Container.Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
    span{
      font-size: 14px;
    }
  }
`;

Container.Data = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
