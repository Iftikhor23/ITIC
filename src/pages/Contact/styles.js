import styled from "styled-components";
import background from "../../assets/images/contactBack.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  padding: 100px 0px 32px 115px;
  position: relative;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 840px) {
    height: 1024px;
    width: 100%;
    padding: 100px 0px 32px 78px;
  }

  @media screen and (max-width: 653px) {
    padding: 0;
    height: 855px;
  }
`;

Container.BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 12px;
`;

Container.InfoWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  width: 451px;
  height: 128px;
  gap: 24px;

  @media screen and (max-width: 840px) {
    margin-top: -160px;
  }
`;

Container.Label = styled.p`
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  opacity: 0.3;
`;

Container.Info = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
`;

Container.PhoneAndEmail = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

Container.FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  opacity: 0.3;
  width: fit-content;
  height: 17px;
`;

Container.Bubble = styled.div`
  height: 614px;
  right: 0;
  object-fit: cover;
  position: fixed;
  bottom: -20px;
  width: 699px;
  animation: wabble 2s linear infinite;

  @keyframes wabble {
    0% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(-5px);
    }
  }

  @media screen and (max-width: 840px) {
    position: absolute;
    height: fit-content;
    width: fit-content;
    right: 100px;
    bottom: -33px;
    .bubble {
      width: 544px;
    height: 485px;
    }
  }
`;
