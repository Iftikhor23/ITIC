import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
    width: 918px;
    height: 600px;

    @media screen and (max-width: 840px) {
        width: 728px;
    }
`;

Container.Desc = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 107px;
    width: 691x;
`;

Container.Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
`;

Container.Title = styled.h2`
    color: #ffffff;
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
`;

Container.Parag = styled.p`
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    opacity: 0.67;
`;

Container.Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:rgba(255, 255, 255, 0.1);
    width: 60px;
    height: 60px;
    border-radius: 30px;
    &:hover{
        background-color: #00cdc2;
        transition: 0.7s;
    }
    cursor: pointer;
`;