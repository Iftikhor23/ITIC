import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300vw;
    height: 100vh;
    background-color: #fff;
    gap: 50px;
    position: relative;
`;

Container.NoAvaivable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #ffffff;
    border: 1px solid;
    border-color: #dfdfdf;
    border-radius: 30px;
    height: 412px;
    width: 496px;
    padding: 49px 58px 35px 37px;
`;

Container.Text = styled.h3`
    color: #121212;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 30px;
    width: 401px;
`;