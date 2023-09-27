import styled from "styled-components";

export const Container = styled.div`
  background-color: #051c2c;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 130px;
  padding-top: 140px;
  position: relative;
`;

Container.MidWrap = styled.div`
  display: flex;
  align-items: center;
`;

Container.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

Container.Gradient = styled.div`
  background-color: #00cdc2;
  border-radius: 601.5px/389px;
  filter: blur(243px);
  height: 778px;
  position: fixed;
  width: 882px;
  top: 472px;
`;
