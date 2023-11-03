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
    height: 905px;
    width: 100vw;
    justify-content: center;
  }

  @media screen and (max-width: 653px) {
    width: 100vw;
    height: 560px;
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
      animation: jumping 2s linear infinite alternate;

      @media screen and (max-width: 840px) {
        left: 136px;
        top: 221px;
      }
      @media screen and (max-width: 653px) {
        width: 79px;
        left: 65px;
        top: 118px;
      }
    }

    .soonBra {
      position: absolute;
      left: 421px;
      bottom: 184px;
      animation: jumping 2s linear infinite alternate;


      @media screen and (max-width: 840px) {
        left: 233px;
        bottom: 243px;
      }
      @media screen and (max-width: 653px) {
        width: 79px;
        left: 115px;
        bottom: 142px;
      }
    }
    .uzbLoc {
      position: absolute;
      top: 182px;
      right: 332px;
      animation: jumping 2s linear infinite alternate;


      @media screen and (max-width: 840px) {
        right: 128px;
        top: 212px;
      }
      @media screen and (max-width: 653px) {
        width: 79px;
        right: 47px;
        top: 117px;
      }
    }
    .sinLoc {
      position: absolute;
      top: 293px;
      right: 200px;
      animation: jumping 2s linear infinite alternate;


      @media screen and (max-width: 840px) {
        top: 272px;
        right: 55px;
      }
      @media screen and (max-width: 653px) {
        width: 79px;
        top: 154px;
        right: 10px;
      }
    }
  }
  

  @media screen and (max-width: 840px) {
    flex-direction: column;
    gap: 0px;
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

  /* @keyframes jumping {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0px);
    }
  } */
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


