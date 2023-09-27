import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 240px;
  height: 100vh;
  background-color: #fff;
  padding: 69px 16px 200px 24px;
  color: red;
`;

Container.List = styled.li`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  &:hover {
    h3 {
      color: rgba(0, 146, 153, 1);
      transition: 0.7s;
    }
    svg {
      path {
        fill: rgba(0, 146, 153, 1);
        stroke: rgba(0, 146, 153, 1);
        transition: 0.7s;
      }
    }

  }
`;

Container.Title = styled.h3`
  color: #051313;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24.5px;
`;
