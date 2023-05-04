import styled, { css } from 'styled-components';

interface TextRenameFormProps {
    isHide?: boolean;
}

export const TextRenameForm = styled.form<TextRenameFormProps>`
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;
    grid-gap: 10px;
    padding: 10px;
    border-bottom: 1px solid rgb(218, 218, 218);

    ${({ isHide }) =>
        isHide &&
        css`
            display: none;
        `}
`;
