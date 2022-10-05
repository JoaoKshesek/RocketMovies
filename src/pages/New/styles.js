import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "back"
    "content";
    
    > main {
        grid-area: content;
        overflow-y: auto;        
    }

    > Link {
        grid-area: back;
        ButtonBack {

            margin: 40px auto;
            max-width: 1067px;
            padding: 0 600px;
            display: flex;
        }
    }

    main::-webkit-scrollbar {
        width: 8px;              /* width of the entire scrollbar */
    }

    main::-webkit-scrollbar-track {
     background: transparent;        /* color of the tracking area */
    }

    main::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.ROSE};    /* color of the scroll thumb */
        border-radius: 9999px;
        border: none;  /* creates padding around scroll thumb */
    }
    
    
    
`;

export const Form = styled.form`
    max-width: 1067px;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    gap: 40px;

    > header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: 24px;

        a {
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

    Textarea {
        margin-bottom: 0;
    }
    
    > div {
        display: flex;
        gap: 40px;
    }
    h2 {
        font-size: 20px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
    
`;

export const Markers = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    .tags {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 16px;
        gap: 24px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
`;

export const Buttons = styled.div`
    Button {
        margin-top: 0;
    }
    Button:first-child {
        color: ${({ theme }) => theme.COLORS.ROSE};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
`;