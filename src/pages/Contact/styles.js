import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: #051c2c;
  padding: 100px 0px 32px 115px;
  position: relative;
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

Container.Gradient = styled.div`
  background-color: #00cdc2;
  /* border-radius: 1233px; */
  filter: blur(300px);
  height: 600px;
  width: 685px;
  right: 0;
  position: absolute;
  bottom: 0;
`;

Container.Bubble = styled.div`
    height: 614px;
    right: 0;
    object-fit: cover;
    position: fixed;
    bottom: 0;
    width: 699px;
`;