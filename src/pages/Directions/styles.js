import styled from "styled-components";

export const Container = styled.div`
  background-color: #050919;
  height: 100vh;
  width: 230vw;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 292px;


  @media screen and (max-width: 840px) {
    height: 2530px;
    width: 98%;
    flex-direction: column;
    align-items: center;
    gap: 80px;
  }

  @media screen and (max-width: 653px) {
     width: 50%;
     height: 1780px;
  }
`;


Container.Categories = styled.div`
  display: flex;
  align-items: center;
  gap: 68px;
  .catImage{
    width: 100%;
    @media screen and (max-width: 653px) {
      width: 355px;
    }
  }

  @media screen and (max-width: 840px) {
    flex-direction: column;
  }
`;
