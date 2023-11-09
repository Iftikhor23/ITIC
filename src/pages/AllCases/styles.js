import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 450vw;
  height: 100vh;
  background-color: #051c2c;
  gap: 89px;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 89px;

    @media screen and (max-width: 840px) {
      flex-direction: column;
      height: 100%;
      width: fit-content;
      align-items: flex-start;
    }
  }

  @media screen and (max-width: 840px) {
    flex-direction: column;
    height: 100%;
    width: 100vw;
  }
`;

Container.Cases = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  @media screen and (max-width: 840px) {
    flex-direction: column;
  }
`;
