import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 170vw;
  height: 100vh;
  background-color: #fff;

  @media screen and (max-width: 840px) {
    width: 100vw;
    height: 1730px;
  }

  @media screen and (max-width: 653px) {
    height:880px;
  }
`;

Container.Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: 840px) {
    flex-direction: column;
  }
`;

Container.Text = styled.div``;

Container.Vacancies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (max-width: 840px) {
    width: 100%;
    height: 100%;
  }
`;

Container.SeeAll = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 412px;
  width: 326px;
  border-radius: 30px;
  padding: 49px 32px 35px 37px;
  background-color: #00cdc2;
  cursor: pointer;
`;

Container.ArrowWrap = styled.div`
  display: flex;
  justify-content: end;
`;

Container.Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #fff;
  color: #00cdc2;
`;

Container.ArrowText = styled.h3`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
`;
