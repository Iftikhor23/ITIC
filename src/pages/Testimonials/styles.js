import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  gap: 201px;
  margin-right: -1px;

  @media screen and (max-width: 840px) {
    width: 100vw;
    height: 860px;
    flex-direction: column;
    gap: 100px;
  }

  @media screen and (max-width: 653px) {
    height: 740px;
    width: 100vw;
  }
`;

Container.Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 201px;

  @media screen and (max-width: 840px) {
    align-items: flex-start;
    gap: 100px;
    flex-direction: column;
  }
`;

Container.TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 13px;
  @media screen and (max-width: 840px) {
    padding-left: 20px;
  }
`;

Container.TestiBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 240px;
  width: 426px;
  border-radius: 12px;
  padding: 50px 82px 65px 45px;
  background-color: #fff;
  &:nth-child(odd) {
    background: linear-gradient(
      to right,
      rgb(255, 978, 255) 0%,
      rgba(255, 423, 75, 0) 200%
    );
    background-color: #6c9f9e;
  }
  @media screen and (max-width: 653px) {
    width: 355px;
    height: 210px;
  }
`;

Container.TestiBoxTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 240px;
  width: 426px;
  border-radius: 12px;
  padding: 50px 82px 65px 45px;
  background-color: #fff;
  &:nth-child(odd) {
    background: linear-gradient(
      to left,
      rgb(255, 978, 255) 0%,
      rgba(255, 423, 75, 0) 200%
    );
    background-color: #6c9f9e;
  }
`;

Container.Carousel = styled.div`
  background: radial-gradient(circle, rgba(109, 160, 157, 1) 10%, #fff 80%);
  display: flex;
  gap: 5.5px;
  @media screen and (max-width: 840px) {
    flex-direction: column;
    gap: 0;
  }
`;

Container.Above = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .testiImg {
    height: 60px;
    width: 60px;
    object-fit: cover;
    border-radius: 50%;
  }
`;
