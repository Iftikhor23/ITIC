import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Container.Wrapper = styled.div`
box-shadow: 13px 10px 94px #223b5326;
  display: flex;
  align-items: center;
  gap: 27px;
  background-color: #fff;
  justify-content: center;
  width: 667px;
  height: 299px;
  .flex{
    display: flex;
    flex-direction: column;
    gap: 36px;
  }
  .buttonWrap{
    display: flex;
    align-items: center;
    gap: 14px;
  }
`;

Container.Title = styled.h3`
  color: #000000;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;
