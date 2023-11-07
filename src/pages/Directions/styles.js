import styled from "styled-components";

export const Container = styled.div`
  background-color: #050919;
  width: 240vw;
  height: 100vh;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 292px;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 292px;
  }

  .textBox {
    width: 100%;
    max-width: 528px;
  }
  @media screen and (max-width: 840px) {
    height: 2530px;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 80px;
    }
  }

  @media screen and (max-width: 653px) {
    height: 1830px;
  }
`;

Container.Categories = styled.div`
  display: flex;
  align-items: center;
  gap: 68px;
  .catImage {
    width: 100%;
    @media screen and (max-width: 653px) {
      width: 355px;
    }
  }

  @media screen and (max-width: 840px) {
    flex-direction: column;
  }
`;
export const HeadingDirection = styled.h1`
  font-size: 72px;
  font-weight: 500;
  margin: 5px;
  width: 100%;
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
