import styled from "styled-components";

export const FormWrapper = styled.form<{ mobileHidden?: boolean }>`
    height: 500px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid #dbdbdb;
    box-shadow: 3px 13px 17px #aaaaaa;
    padding: 10px 30px;
    border-radius: 4px;
    background-color: white;
    @media screen and (max-width: 600px) {
        ${(props) => (props.mobileHidden ? "display: none" : "")};
    }
`;
export const FormTitle = styled.h2`
    color: #666666;
    font-family: var(--font-family);
`;
export const FormInput = styled.input`
    height: 35px;
    outline: none;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding-left: 20px;
    font-family: var(--font-family);
    color: #666666;
`;
export const CtaWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
export const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    color: #666666;
    font-family: var(--font-family);
    ${FormInput} {
        height: unset;
        align-self: normal;
        margin: 5px;
    }
`;

export const FormLink = styled.a`
    padding-left: 3px;
    color: #666666;
    font-family: var(--font-family);
    text-decoration: underline;
    cursor: pointer;
    :hover {
        text-decoration: none;
    }
`;
export const FormLinkTextWrapper = styled.div``;
