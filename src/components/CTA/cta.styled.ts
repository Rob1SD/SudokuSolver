import styled from "styled-components";

export const CTAWrapper = styled.a<{ prime?: boolean }>`
    width: fit-content;
    padding: 0 10px;
    background-color: ${(props) => (props.prime ? "#F29F5C" : "#FF6778")};
    cursor: pointer;
    min-height: 40px;
    height: fit-content;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: white;
    font-family: "Hind", sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
    border-radius: 3px;
    text-transform: uppercase;
    box-shadow: 7px 3px 5px #aaaaaa;
    text-align: center;
    :hover {
        background-color: ${(props) => (props.prime ? "#F3AF5D" : "#FF6899")};
        box-shadow: unset;
        margin-top: 5px;
    }
`;
