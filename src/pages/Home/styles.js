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

  @media screen and (max-width: 840px) {
    height: 1300px;
  }
`;

Container.TeamBox = styled.div`
  display: flex;
  width: 335px;
  position: relative;
  .employee-image {
    width: 80px;
    height: 80px;
    border-radius: 80px;
    position: absolute;
    border: 5px solid transparent;
  }
  .lastrounded {
    display: flex;
    align-items: center;
    justify-content: end;
    width: 80px;
    height: 80px;
    border-radius: 80px;
    background-color: #fff;
    margin-left: 240px;
    margin-top: 33px;
  }
  .lastrounded > span {
    color: #061f2f;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: 8px;
  }
  .loading-skeleton {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 33px;
  }

  .skeleton-image {
    width: 85px;
    height: 85px;
    border-radius: 80px;
    border: 5px solid #04545c;
    background-color: #e0e0e0;
    margin-right: 10px;
  }

  .skeleton-image:last-child {
    margin-right: 0;
  }
`;

Container.MidWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100%;

  .chart {
    position: absolute;
    bottom: 20px;
    right: 50px;
    width: 620px;
    /* height: 100%; */
    display: flex;
    align-items: center;

    @media screen and (max-width: 840px) {
      bottom: 222px;
    }
    .lilChart {
      position: absolute;
      left: -26px;
      z-index: 99;
      width: 280px;
      height: 500px;
      bottom: 0;
      user-select: none;

      @media screen and (max-width: 840px) {
        left: -153px;
      }
      @media screen and (max-width: 653px){
        width: 132px;
        left: 222px;
      }
    }
    .midChart {
      position: absolute;
      left: 182px;
      bottom: 0;
      width: 224px;
      z-index: 20;
      height: 350px;
      user-select: none;

      @media screen and (max-width: 840px) {
        left: 97px;
      }

      @media screen and (max-width: 653px) {
        width: 154px;
        left: 340px;
      }
    }
    .bigChart {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 354px;
      height: 600px;
      user-select: none;

      @media screen and (max-width: 653px) {
        width: 228px;
        right: -60px;
      }
    }
    .upTrade {
      position: relative;
      top: -238px;
      left: 115px;
      z-index: 20;
      user-select: none;

      @media screen and (max-width: 840px) {
        top: -242px;
        left: 24px;
      }

      @media screen and (max-width: 653px) {
        width: 227px;
        left: 291px;
      }
    }
  }

  @media screen and (max-width: 840px) {
    display: flex;
    flex-direction: column;
  }
`;

Container.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 130px;

  @media screen and (max-width: 840px) {
    margin-left: 0;
    margin-top: 130px;
  }
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
