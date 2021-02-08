import styled from "styled-components";
import { NavBarBodyWrapper, NavBarWrapper } from "./navBar.styled";

export const SecondaryNavBarWrapper = styled(NavBarWrapper)``;
export const SecondaryNavBarBodyWrapper = styled(NavBarBodyWrapper)`
    height: unset;
    padding: 20px 0;
    @media screen and (max-width: 500px) {
        height: unset;
    }
`;
export const SecondaryNavBarCardWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    @media screen and (max-width: 1023px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
