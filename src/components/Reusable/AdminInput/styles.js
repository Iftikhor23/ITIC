import styled from "styled-components";

export const Container = styled.div`
    width: 305px;
    height: 82px;
    display: flex;
    flex-direction: column;
`;

export const Wrapper = styled.div`
  width: ${({ width }) => (width ? width : "305px")};
  height: ${({ height }) => (height ? height : "60px")};
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 21px 24px 20px 24px;
`;

Wrapper.Input = styled.input`
  width: 100%;
  height: 90%;
  border: none;
  outline: none;
  background: none;
  &::placeholder {
    color: #000000;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    opacity: 0.3;
  }
`;

Wrapper.Label = styled.p`
  color: #000000;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;