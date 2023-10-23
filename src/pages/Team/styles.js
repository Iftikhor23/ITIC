import styled from "styled-components";

export const Container = styled.div`
  background-color: #051c2c;
  width: 230vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 840px) {
    height: fit-content;
    width: 100%;
    padding: 0;
  }

  @media screen and (max-width: 653px) {
    
  }
`;

Container.Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;

  @media screen and (max-width: 840px) {
    flex-direction: column;
    .text {
      margin-left: -180px;
    }
  }

  @media screen and (max-width: 653px) {
    .text{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin: 0;
    }
  }
`;

Container.Images = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  text-align: center;
  .image-teams{
    width: 310px;
    height: 360px;
    border-radius: 30px;
    object-fit: cover;
  }
`;

Container.Name = styled.h1`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;

Container.Job = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
`;

//fjbeorf