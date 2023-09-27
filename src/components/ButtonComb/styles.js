import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: ${({btnGap}) => (btnGap ? btnGap : "6px")};
  cursor: pointer;
  width: fit-content;
`;

Container.ModalWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({fontSize}) => (fontSize ? fontSize : "24px")};
    font-weight: 500;
    border: none;
    width: ${({btnWidth}) => (btnWidth ? btnWidth : "165px") };
    height: ${({btnHeight}) => (btnHeight ? btnHeight : "65px")};
    background-color: #00cdc2;
    color: #fff;
`;

Container.ArrowWrapper = styled.div`
    width: ${({width}) => (width ? width : "65px")};
    height: ${({height}) => (height ? height : "65px")};
    border-radius: 50%;
    background-color: #00cdc2;
    display: flex;
    align-items: center;
    justify-content: center;
`;

