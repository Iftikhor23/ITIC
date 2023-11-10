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
    .soonUsa:hover + .positiontext1 {
      display: block;
      transition: opacity 0.3s ease-in-out;
      opacity: 1;
    }

    .positiontext1 {
      position: absolute;
      opacity: 0;
      left: 250px;
      top: 111px;
      padding: 8px 10px;
      border-radius: 9px;
      width: 212px;
      color: #fff;
      background-image: linear-gradient(#00cdc2, #00cdc200, #00cdc2);
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      animation: jumping 2s linear infinite alternate;

      @media screen and (max-width: 653px) {
        width: 100px;
        height: 45px;
        font-size: 8px;
        left: 55px;
        top: 63px;
        padding: 2px 2px;
      }
    }
    .soonBra:hover + .positiontext2 {
      display: block;
      transition: opacity 0.3s ease-in-out;
      opacity: 1;
    }

    .positiontext2 {
      position: absolute;
      left: 422px;
      top: 310px;
      padding: 8px 10px;
      border-radius: 9px;
      width: 212px;
      color: #fff;
      background-image: linear-gradient(#00cdc2, #00cdc200, #00cdc2);
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      animation: jumping 2s linear infinite alternate;

      @media screen and (max-width: 653px) {
        width: 100px;
        height: 45px;
        font-size: 8px;
        left: 105px;
        top: 223px;
        padding: 2px 2px;
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
    .positiontext3 {
      position: absolute;
      left: 842px;
      top: 99px;
      padding: 8px 10px;
      width: 244px;
      border-radius: 9px;
      width: 212px;
      color: #fff;
      background-image: linear-gradient(#00cdc2, #00cdc200, #00cdc2);
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      animation: jumping 2s linear infinite alternate;

      @media screen and (max-width: 653px) {
        width: 100px;
        height: 45px;
        font-size: 8px;
        left: 215px;
        top: 67px;
        padding: 2px 2px;
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
    .uzbLoc:hover + .positiontext3 {
      opacity: 1;
    }

    .positiontext4 {
      position: absolute;
      left: 973px;
      top: 211px;
      padding: 8px 10px;
      width: 244px;
      border-radius: 9px;
      width: 212px;
      color: #fff;
      background-image: linear-gradient(#00cdc2, #00cdc200, #00cdc2);
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      animation: jumping 2s linear infinite alternate;

      @media screen and (max-width: 653px) {
        width: 100px;
        height: 45px;
        font-size: 8px;
        left: 255px;
        top: 204px;
        padding: 2px 2px;
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
    .sinLoc:hover + .positiontext4 {
      opacity: 1;
    }
  }

  @media screen and (max-width: 840px) {
    align-items: flex-start;
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

  @keyframes jumping {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0px);
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
