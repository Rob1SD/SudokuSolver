import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";
import { SectionBodyWrapper, SectionWrapper } from "../Landing/landing.styled";

export const HeroWrapper = styled(SectionWrapper)`
    margin-top: 2px;
`;
export const HeroBodyWrapper = styled(SectionBodyWrapper)`
    justify-content: space-between;
`;
export const HeroBackgroundImage = styled(BackgroundImage)`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const HeroTextWrapper = styled.div`
    color: #ededed;
    max-width: 400px;
`;
export const HeroTitleWrapper = styled.h1`
    font-size: 4rem;
    line-height: 70px;
    @media screen and (max-width: 600px) {
        font-size: 3rem;
    }
`;
export const HeroSubTitleWrapper = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    @media screen and (max-width: 600px) {
        font-size: 1rem;
    }
`;
