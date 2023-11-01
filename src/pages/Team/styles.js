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
    width: 100%;
    height: 2100px;
    justify-content: center;
  }

  @media screen and (max-width: 653px) {
    height: 1430px;
  }
`;

Container.Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;

  @media screen and (max-width: 840px) {
    flex-direction: column;
    width: 100%;
    .text {
    }
  }

  @media screen and (max-width: 653px) {
    .text {
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
  .image-teams {
    width: 310px;
    height: 360px;
    border-radius: 30px;
    object-fit: cover;

    @media screen and (max-width: 653px) {
      height: 210px;
      width: 173px;
    }
  }

  @media screen and (max-width: 840px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 653px) {
    flex-wrap: wrap;
  }
`;

Container.Name = styled.h1`
  color: #fff;
  font-size: 20px;
  font-weight: 700;

  @media screen and (max-width: 653px) {
    font-size: 14px;
  }
`;

Container.Job = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 400;

  @media screen and (max-width: 653px) {
    font-size: 12px;
  }
`;

//fjbeorf
