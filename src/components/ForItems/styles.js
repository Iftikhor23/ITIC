import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 249px;
    width: fit-content;
    justify-content: center;
`;

Container.Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 130px;
`;

Container.Number = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 123px;
    height: 85px;
    color: rgba(22, 15, 65, 1) ;
    background-color: #fff;
    font-size: 56px;
    font-weight: 500;
    margin-bottom: 28px;
`;

Container.Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 14px;
`;