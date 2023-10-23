import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #050919;
  width: 2382px;
  height: 100vh;
  overflow: hidden;
  gap: 205px;

  .textWrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 13px;
    @media screen and (max-width: 840px) {
      margin-left: -330px;
      gap: 5px;
    }

    @media screen and (max-width: 653px) {
      align-items: center;
      text-align: center;
      margin: 0;
    }
  }

  .response {
    display: none;
    @media screen and (max-width: 840px) {
      display: block;
      margin-top: -50px;
    }

    @media screen and (max-width: 653px) {
      display: none;
    }
  }

  .mobile{
    margin-top: -70px;
    display: none;
    @media screen and (max-width: 653px) {
      display: block;
    }
  }

  @media screen and (max-width: 840px) {
    height: fit-content;
    width: 100%;
    flex-direction: column;
    gap: 51px;

    .respDesk {
      display: none;
    }
  }
`;

Container.CasesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 918px;
  height: 100%;
  overflow: scroll;
  overflow-y: scroll;
  gap: 60px;
  &::-webkit-scrollbar {
    width: 0;
  }

  @media screen and (max-width: 840px) {
    width: fit-content;
    gap: 1px;
  }
`;
