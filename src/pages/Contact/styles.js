import styled from "styled-components";
import background from '../../assets/images/contactBack.png'

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
`;

Container.BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 12px;
  /* z-index: 1; */
`;

Container.InfoWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  width: 451px;
  height: 128px;
  gap: 24px;
  /* z-index: 100; */
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
  /* z-index: 100; */
`;

Container.Bubble = styled.div`
    height: 614px;
    right: -763px;
    object-fit: cover;
    position: relative;
    bottom: 400px;
    width: 699px;
    animation: wabble 2s linear infinite;

    @keyframes wabble {
      0%{
        transform: translateY(-5px);
      }
      50%{
        transform: translateY(-30px);
      }
      100%{
        transform: translateY(-5px);
      }
    }
`;