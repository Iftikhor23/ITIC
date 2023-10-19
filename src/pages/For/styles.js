import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #051c2c;
  width: 230vw;
  height: 100vh;

  @media only screen and (max-width: 768px) {
    height: fit-content;
    width: 100%;
    padding: 29px 15px;
  }

  @media only screen and (max-width: 375px) {
    height: fit-content;
    width: 100%;
    padding: 29px 3px;
  }

  @media only screen and (max-width: 840px) {
    height: fit-content;
    width: 100%;
    padding: 29px 15px;
  }
`;

Container.Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 249px;
  width: fit-content;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 840px) {
    display: flex;
    flex-direction: column;
  }
`;

Container.Box = styled.div`
  display: flex;
  align-items: center;
  gap: 148px;
  .forImage {
    @media only screen and (max-width: 768px) {
      height: 251px;
      width: 263px;
    }

    @media only screen and (max-width: 840px) {
      height: 251px;
      width: 263px;
    }
  }
  @media screen and (max-width: 376px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 426px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  @media screen and (max-width: 653px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 840px) {
    display: flex;
    align-items: center;
    gap: 33px;
  }
`;

Container.Number = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 123px;
  height: 85px;
  color: rgba(22, 15, 65, 1);
  background-color: #fff;
  font-size: 56px;
  font-weight: 500;
  margin-bottom: 28px;

  @media only screen and (max-width: 768px) {
    width: 108px;
    height: 68px;
  }

  @media only screen and (max-width: 840px) {
    width: 108px;
    height: 68px;
  }
`;

Container.Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;

  @media only screen and (max-width: 376px) {
    text-align: center;
    align-items: center;
  }

  @media only screen and (max-width: 426px) {
    text-align: center;
    align-items: center;
  }

  @media only screen and (max-width: 653px) {
    text-align: center;
    align-items: center;
  }
`;
