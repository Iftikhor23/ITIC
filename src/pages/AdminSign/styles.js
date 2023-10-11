import styled from "styled-components";
import background from "../../assets/images/signBack.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
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

Container.Header = styled.div`
text-align: center;
  .headerText {
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 22px;
    white-space: nowrap;
    margin-top: 30px;
  }
`;
