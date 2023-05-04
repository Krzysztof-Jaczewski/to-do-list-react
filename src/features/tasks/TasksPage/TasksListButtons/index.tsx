import styled, { css } from 'styled-components';

interface ListButtonProps {
    remove?: boolean;
    isCurrentlyRename?: boolean;
}

export const ListButton = styled.button<ListButtonProps>`
    width: 30px;
    height: 30px;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.completeTaskButton};
    cursor: pointer;
    color: white;
    border: none;
    transition: background 0.5s linear;
    border-radius: 10px;
    box-shadow: 2px 2px 3px rgba(30, 30, 30, 0.5),
        -2px -2px 3px rgba(230, 230, 230, 0.7),
        inset 2px 2px 3px rgba(0, 0, 0, 0.5),
        inset -2px -2px 3px rgba(230, 230, 230, 0.7);
    &:hover {
        filter: ${({ theme }) => theme.filter.hover};
    }

    &:active {
        filter: ${({ theme }) => theme.filter.active};
        outline: 2px solid black;
    }

    ${({ remove }) =>
        remove &&
        css`
            background-color: ${({ theme }) => theme.colors.cancelButton};

            &:hover {
                filter: ${({ theme }) => theme.filter.hover};
            }

            &:active {
                filter: ${({ theme }) => theme.filter.active};
                outline: 2px solid black;
            }
        `}

    ${({ isCurrentlyRename }) =>
        isCurrentlyRename &&
        css`
            background-color: ${({ theme }) => theme.colors.renameButton};

            &:hover {
                filter: ${({ theme }) => theme.filter.hover};
            }

            &:active {
                filter: ${({ theme }) => theme.filter.active};
                outline: 2px solid black;
            }
        `}
`;
