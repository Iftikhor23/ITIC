import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #050919;
    width: 2382px;
    height: 100vh;
    overflow: hidden;
    gap: 205px;
`;

Container.CasesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 918px;
    height: 100%;
    overflow: scroll;
    overflow-y: scroll;
    gap: 60px;
    &::-webkit-scrollbar{
        width: 0;
    }`;


