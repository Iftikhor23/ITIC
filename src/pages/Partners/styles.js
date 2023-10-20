import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 97px;
    width: 110vw;
    height: 100vh;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    .partners-img {
        width: 243px;
        height: 80px;
    }
`;

Container.TextWrap = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: start;
`;

Container.ImgWrap = styled.div`
    width: 970px;
    height: 320px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

Container.Img = styled.div`
    width: 310px;
    height: 150px;
    padding: 35px 33px;
`;