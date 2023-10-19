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

  @media screen and (max-width: 840px) {
    height: fit-content;
    width: 100%;
    flex-direction: column;
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
  }
`;
