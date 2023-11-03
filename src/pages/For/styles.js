import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #051c2c;
  width: 230vw;
  height: 100vh;

  

  @media only screen and (max-width: 840px) {
    height: 1580px;
    width: 100vw;
    justify-content: center;
  }

  @media only screen and (max-width: 653px) {
    justify-content: center;
    width: 100vw;
    height: 1765px;
  }
`;

Container.Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 249px;
  width: fit-content;
  justify-content: center;

  @media only screen and (max-width: 840px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: 653px) {
    gap: 190px;
  }
`;

Container.Box = styled.div`
  display: flex;
  align-items: center;
  gap: 148px;

  @media screen and (max-width: 840px) {
    display: flex;
    align-items: center;
    gap: 33px;

    .forImgGlobe{
      width: 263px;
      height: 251px;
    }

    .buildingImg{
      width: 160px;
      height: 181px;
    }

    .personImg{
      width: 196;
      height: 155;
    }
  }

  @media screen and (max-width: 653px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .forImgGlobe{
      width: 213px;
      height: 203px;
    }

    .buildingImg{
      width: 116px;
      height: 131px;
    }

    .personImg{
      width: 164;
      height: 130;
    }
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



  @media only screen and (max-width: 840px) {
    width: 108px;
    height: 68px;
    margin: 0;
  }
  @media only screen and (max-width: 653px) {
    width: 105px;
    height: 55px;
    margin:0;
    font-size: 48px;
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
