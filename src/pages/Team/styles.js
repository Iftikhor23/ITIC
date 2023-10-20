import styled from 'styled-components';

export const Container = styled.div`
  background-color: #051c2c;
  width: 230vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 270px 182px 209px 182px;
  overflow: hidden;
`;

Container.Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
`;

Container.Images = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  text-align: center;
  .image-teams{
    width: 310px;
    height: 360px;
    border-radius: 30px;
  }
`;

Container.Name = styled.h1`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;

Container.Job = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
`