import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  width: 170vw;
  height: 100vh;
  justify-content: center;
  position: relative;
`;

Container.Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

Container.Text = styled.div``;

Container.Vacancies = styled.div`
  display: flex;
  gap: 16px;
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

// .container .vacancies .seeAll .arrowContainer{
//     display: flex;
//     justify-content: end;
// }

// .container .vacancies .seeAll .arrow {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 50px;
//   width: 50px;
//   border-radius: 50%;
//   background-color: #fff;
//   color: #00cdc2;
// }

// .container .vacancies .seeAll .text h3 {
//   font-size: 24px;
//   font-weight: 400;
//   color: #fff;
// }
