import styled, { css } from "styled-components";

const invalidCss = css``;

export const CTAWrapper = styled.a<{ prime?: boolean; isInvalid?: boolean }>`
    width: fit-content;
    padding: 2px 10px;
    background-color: ${(props) => (props.prime ? "#F29F5C" : "#FF6778")};
    cursor: pointer;
    min-height: 40px;
    height: fit-content;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: white;
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 1.2rem;
    border-radius: 3px;
    text-transform: uppercase;
    box-shadow: 7px 3px 5px #aaaaaa;
    text-align: center;
    :hover {
        background-color: ${(props) => (props.prime ? "#F3AF5D" : "#FF6899")};
        box-shadow: unset;
        padding-top: 4px;
        padding-bottom: 0px;
    }
    @media screen and (max-width: 500px) {
        font-size: 0.8rem;
    }
`;
