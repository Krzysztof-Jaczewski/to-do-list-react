import { Link } from 'react-router-dom';
import { HideTaskProps } from 'src/ts/types';
import styled, { css } from 'styled-components';

export const List = styled.ul`
    list-style: none;
    padding: 0;
`;

export const Item = styled.span<HideTaskProps>`
    display: grid;
    grid-template-columns: auto 1fr repeat(2, auto);
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

interface LinkProps {
    $isDone?: boolean;
}

export const StyledLink = styled(Link)<LinkProps>`
    padding: 6px;
    text-decoration: none;
    color: black;
    width: 100%;
    position: relative;
    word-break: break-word;
    background-color: transparent;
    cursor: pointer;

    ${({ $isDone }) =>
        $isDone &&
        css`
            text-decoration: line-through;
        `}

    &:hover {
        z-index: 1;
        color: white;
    }

    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: scaleX(0);
        transform-origin: bottom right;
        background-image: linear-gradient(
            to right,
            hsl(120, 100%, 25%),
            hsl(200, 95%, 40%)
        );
        transition: transform 0.5s ease;
        height: 100%;
    }

    &:hover::before {
        transform: scaleX(1);
        transform-origin: bottom left;
        z-index: -1;
    }
`;
