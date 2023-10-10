import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #051c2c;
  display: flex;
  justify-content: center;
  align-items: center;
  .gradient {
    background-color: #00cdc2;
    height: 700px;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 700px;
    border-radius: 616.5px/503.5px;
    filter: blur(300px);
  }
`;

Container.Wrapper = styled.div`
  width: 400px;
  height: 500px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  z-index: 1;
`;

Container.Header = styled.div``;
