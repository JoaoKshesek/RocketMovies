import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "header"
    "brand"
    "content"
    "content";
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    
`;

export const Brand = styled.div`
    grid-area: brand;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 123px;
    margin-top: 50px;

    > h1 {
        font-size: 32px;
        font-weight: 400;
        color: #FFFFFF;
    }

`;

export const NewMovie = styled(Link)`
    background-color: ${({ theme }) => theme.COLORS.ROSE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 48px;
    width: 207px;
    border-radius: 8px;
    padding: 0 32px;
    font-size: 16px;
    font-weight: 400;

    svg {
        margin-right: 8px;
    }
`;

export const Content = styled.div`
    grid-area: content;
    padding: 12px 123px;
    overflow-y: auto;
`;
