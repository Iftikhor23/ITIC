import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 378px;
  height: 100vh;
  gap: 21px;
  background-color: #fff;
  padding: 20px 10px;
  border-right: 1px solid #d9d9d9;
  background: #fff;
`;

Container.SideWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

Container.Title = styled.h3`
  color: ${({ active }) => active && "#009299"};
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24.5px;
`;
Container.Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 12px 40px;
  cursor: ${({ disable }) => (disable ? "not-allowed" : "pointer")};
  opacity: ${({ disable }) => (disable ? "0.5" : "1")};
  background: ${({ active }) => active && "#f4f7f4"};
  border-radius: 100px;
  p {
    color: ${({ active }) => active && "#009299"};
  }
  svg {
    path {
      fill: ${({ active }) => active && "#009299"};
    }
  }
  &:hover {
    background-color: ${({ disable }) => !disable && "#f4f7f4"};
  }
`;
