import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300vw;
  height: 100vh;
  background-color: #fff;
  gap: 50px;
  background: linear-gradient(to top, #2c5364, #203a43, #0f2027);
  background: -webkit-linear-gradient(to top, #2c5364, #203a43, #0f2027);

  @media screen and (max-width: 840px) {
    width: 100vw;
    height: 400vh;
    background: #fff;
  }

  @media screen and (max-width: 840px) {
    flex-direction: column;
  }

  .wrapper{
    display: flex;
    gap: 16px;
    @media screen and (max-width: 840px) {
      flex-direction: column;
    }
  }
  ul {
    display: block;
    height: inherit;
  }
  ul {
    list-style-type: none;
    @media screen and (max-width: 840px) {
      display: none;
    }
  }
  li:nth-child(1) {
    position: absolute;
    border-radius: 3px;
    left: 0%;
    height: 60px;
    width: 60px;
    animation-delay: 0s;
    animation-duration: 19s;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(2) {
    position: absolute;
    border-radius: 3px;
    left: 5%;
    height: 45px;
    width: 45px;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(3) {
    position: absolute;
    border-radius: 3px;
    left: 9%;
    height: 70px;
    width: 70px;
    animation-delay: 0s;
    animation-duration: 22s;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(4) {
    position: absolute;
    border-radius: 3px;
    left: 13%;
    height: 20px;
    width: 20px;
    animation-delay: 0s;
    animation-duration: 33s;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(5) {
    position: absolute;
    border-radius: 3px;
    left: 18%;
    height: 20px;
    width: 20px;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(6) {
    position: absolute;
    border-radius: 3px;
    left: 22%;
    height: 100px;
    width: 100px;
    animation-delay: 0s;
    animation-duration: 22s;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(7) {
    position: absolute;
    border-radius: 3px;
    left: 30%;
    height: 20px;
    width: 20px;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(8) {
    position: absolute;
    border-radius: 3px;
    left: 33%;
    height: 20px;
    width: 20px;
    animation-delay: 0s;
    animation-duration: 19s;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(9) {
    position: absolute;
    border-radius: 3px;
    left: 40%;
    height: 20px;
    width: 20px;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(10) {
    position: absolute;
    border-radius: 3px;
    left: 45%;
    height: 20px;
    width: 20px;
    animation-delay: 0s;
    animation-duration: 19s;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(11) {
    position: absolute;
    border-radius: 3px;
    left: 50%;
    height: 20px;
    width: 20px;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(12) {
    position: absolute;
    border-radius: 3px;
    left: 55%;
    height: 20px;
    width: 20px;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(13) {
    position: absolute;
    border-radius: 3px;
    left: 60%;
    height: 20px;
    width: 20px;
    animation-delay: 0s;
    animation-duration: 25s;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(14) {
    position: absolute;
    border-radius: 3px;
    left: 65%;
    height: 20px;
    width: 20px;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(15) {
    position: absolute;
    border-radius: 3px;
    left: 70%;
    height: 20px;
    width: 20px;
    animation-delay: 0s;
    animation-duration: 20s;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(16) {
    position: absolute;
    border-radius: 3px;
    left: 75%;
    height: 20px;
    width: 20px;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(17) {
    position: absolute;
    border-radius: 3px;
    left: 80%;
    height: 70px;
    width: 70px;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(18) {
    position: absolute;
    border-radius: 3px;
    left: 85%;
    height: 80px;
    width: 80px;
    animation-delay: 0s;
    animation-duration: 29s;
    background: rgba(255, 255, 255, 0.8);
  }
  li:nth-child(19) {
    position: absolute;
    border-radius: 3px;
    left: 90%;
    height: 150px;
    width: 150px;
    background: rgba(255, 255, 255, 0.8);
  }
  li {
    animation: animate 25s linear 1s infinite;
    @media screen {
    }
  }

  @keyframes animate {
    from {
      transform: translateY(+2500%) rotate(180deg);
    }
    to {
      transform: translateY(-2500%) rotate(360deg);
    }
  }
`;

Container.NoAvaivable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  border: 1px solid;
  border-color: #dfdfdf;
  border-radius: 30px;
  height: 412px;
  width: 496px;
  padding: 49px 58px 35px 37px;

  @media screen and (max-width: 653px) {
    height: 392px;
    width: 355px;
  }
`;

Container.Text = styled.h3`
  color: #121212;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 30px;
  width: 401px;

  @media screen and (max-width: 653px) {
    width: 301px;
  }
`;
