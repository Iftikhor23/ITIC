import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 97px;
  width: 110vw;
  height: 100vh;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  margin-right: -1px;
  .partners-img {
    width: 243px;
    height: 80px;
    object-fit: cover;
    @media screen and (max-width: 840px) {
      width: 128px;
      height: 42px;
    }
  }

  @media screen and (max-width: 840px) {
    flex-direction: column;
    width: 100vw;
    height: 580px;
  }

  @media screen and (max-width: 653px) {
    height: 660px;
  }
`;

Container.Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 97px;
  @media screen and (max-width: 840px) {
    width: fit-content;
    flex-direction: column;
    gap: 43px;
  }
`;

Container.TextWrap = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: start;
  @media screen and (max-width: 840px) {
    padding: 40px;
  }
`;

Container.ImgWrap = styled.div`
  width: 970px;
  height: 320px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (max-width: 840px) {
    gap: 13px;
    width: 100%;
    height: 100%;
    justify-content: center;
  }
`;

Container.Img = styled.div`
  width: 310px;
  height: 150px;
  padding: 35px 33px;

  @media screen and (max-width: 840px) {
    height: 131px;
    width: 172px;
    padding: 44px 22px;
    .partnerLogo {
      width: 128px;
    }
  }
`;
