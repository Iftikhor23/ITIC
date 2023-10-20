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
    height: fit-content;
    width: 100%;
    flex-direction: column;
    gap: 49px;
    padding: 40px;
    .textBox{
    }
  }
`;


Container.Categories = styled.div`
  display: flex;
  align-items: center;
  gap: 68px;
  .catImage{
    width: 100%;
  }

  @media screen and (max-width: 840px) {
    flex-direction: column;
    /* .catImage {
        width: 688px;
    } */
  }
`;
