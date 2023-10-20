import styled from "styled-components";
import bacground from "../../assets/images/branch.png";

export const Container = styled.div`
  width: 180vw;
  height: 100vh;
  background: url(${bacground});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 840px) {
    height: fit-content;
    width: 100%;
  }
`;

Container.Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 271px;
  z-index: 1;
  .image {
    position: relative;
    .soonUsa {
      position: absolute;
      left: 252px;
      top: 195px;
      @media screen and (max-width: 653px) {
        width: 79px;
      }
    }
    .soonBra {
      position: absolute;
      left: 421px;
      bottom: 184px;
      @media screen and (max-width: 653px) {
        width: 79px;
      }
    }
    .uzbLoc {
      position: absolute;
      top: 182px;
      right: 332px;
      @media screen and (max-width: 653px) {
        width: 79px;
      }
    }
    .sinLoc {
      position: absolute;
      top: 293px;
      right: 200px;
      @media screen and (max-width: 653px) {
        width: 79px;
      }
    }
  }

  @media screen and (max-width: 840px) {
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
  }

  .worldImage {
    @media screen and (max-width: 840px) {
      width: 728px;
    }

    @media screen and (max-width: 653px) {
      width: 355px;
      height: 355px;
    }
  }
`;

Container.Text = styled.div`
  z-index: 1;
  @media screen and (max-width: 653px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
