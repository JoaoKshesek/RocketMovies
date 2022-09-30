import styled from 'styled-components';

export const Container = styled.section`

    background-color: ${({ theme }) => theme.COLORS.BROWN};
    border-radius: 16px;
    padding: 32px;
    margin-bottom: 24px;


    > h2 {

        padding-bottom: 16px;
        margin-bottom: 28px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 24px;
        font-weight: bold;
    }
 `;