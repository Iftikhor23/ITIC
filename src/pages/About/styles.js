import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 332px 286px 262px 286px;
  width: 115vw;
  height: 100vh;
  background-color: #050919;
`;

Container.Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 87px;
`;

Container.Paragraph = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  width: 706px;
`;

Container.Numbers = styled.div`
    display: flex;
    align-items: center;
    gap: 72px;
`;

Container.Num = styled.p`
display: flex;
flex-direction: column;
text-align: center;
  color: #ffffff;
  font-size: 56px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
  span{
    color: #ffffff;
font-family: "SF Pro Display-Regular", Helvetica;
font-size: 14px;
font-weight: 400;
letter-spacing: 0;
line-height: normal;
opacity: 0.6;

  }
`;

Container.Data = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
