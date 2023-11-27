import styled from "styled-components";

export const Container = styled.div`
  width: 190vw;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0 183px;
  @media screen and (max-width: 1300px) {
    justify-content: center;
    padding: 0 80px;
  }

  @media screen and (max-width: 840px) {
    width: 100vw;
    height: 2100px;
    justify-content: center;
    padding: 0 33px;
  }

  @media screen and (max-width: 653px) {
    height: 1436px;
  }
`;

Container.Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;

  @media screen and (max-width: 840px) {
    flex-direction: column;
    width: fit-content;
    align-items: flex-start;
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
    width: 100%;
    max-width: 310px;
    height: 360px;
    border-radius: 30px;
    object-fit: cover;
    transition: box-shadow 0.3s ease;

    @media screen and (max-width: 653px) {
      height: 210px;
      width: 100%;
      max-width: 173px;
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
