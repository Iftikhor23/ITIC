import styled from "styled-components";
import background from "../../assets/images/bacslice.png";

export const Container = styled.div`
  background: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

Container.MidWrap = styled.div`
  display: flex;
  align-items: center;
  .chart {
    position: absolute;
    bottom: 20px;
    right: 50px;
    width: 620px;
    height: 100%;
    display: flex;
    align-items: center;
    .lilChart {
      position: absolute;
      left: -26px;
      z-index: 99;
      width: 280px;
      height: 500px;
      bottom: 0;
      user-select: none;
    }
    .midChart {
      position: absolute;
      left: 182px;
      bottom: 0;
      width: 224px;
      z-index: 20;
      height: 350px;
      user-select: none;
    }
    .bigChart {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 354px;
      height: 600px;
      user-select: none;
    }
    .upTrade {
      position: absolute;
      top: 160px;
      left: 115px;
      z-index: 20;
      user-select: none;
    }
  }
`;

Container.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 140px;
  margin-left: 130px;
`;

Container.ScrollIcon = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  display: flex;
  align-items: center;
  width: 54px;
  height: 17px;
  gap: 5px;
  z-index: 1;
`;

Container.TextWrap = styled.div`
  display: flex;
  gap: 14px;
`;
