import styled from "styled-components";

export const Container = styled.div`
  width: 180vw;
  height: 100vh;
  background-color: #051c2c;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

Container.Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 271px;
  z-index: 1;
`;

Container.Text = styled.div`
  z-index: 1;
`;

Container.GradientOne = styled.svg`
  background-color: #00cdc2;
  border-radius: 1233px;
  filter: blur(300px);
  height: 600px;
  width: 1000px;
  left: 0;
  position: absolute;
  bottom: 0;
`;

Container.GradientTwo = styled.svg`
    background-color: #00cdc2;
    border-radius: 1017px;
    filter: blur(300px);
    height: 600px;
    width: 817px;
    right: -900;
    position: absolute;
    bottom: 0;
    overflow: hidden;
`;
