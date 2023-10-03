import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

Wrapper.Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 24px;
`;

Wrapper.Header = styled.p`
  color: #000000;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
`;

Wrapper.Nav = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
  width: 100%;
  height: 50px;
`;

Wrapper.WrapTable = styled.div`
  width: 100%;
  height: 95%;
`;
