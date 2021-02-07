import styled from "styled-components";
import { SectionBodyWrapper, SectionWrapper } from "../Landing/landing.styled";

export const NavBarWrapper = styled(SectionWrapper)`
    box-shadow: 0px 0px 5px #aaaaaa;
`;
export const NavBarBodyWrapper = styled(SectionBodyWrapper)`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 500px) {
        height: 120px;
    }
    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
`;
export const NavBarCTAWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 512px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const NavBarImageWrapper = styled.div`
    width: fit-content;
    padding: 0 10px 0 0;
`;

export const NavBarImage = styled.img`
    width: 250px;
    @media screen and (max-width: 767px) {
        width: 200px;
    }
`;
