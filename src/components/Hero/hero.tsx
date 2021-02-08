import React from "react";
import { FormLanding } from "../Form/form";
import {
    HeroBackgroundImage,
    HeroBodyWrapper,
    HeroSubTitleWrapper,
    HeroTextWrapper,
    HeroTitleWrapper,
    HeroWrapper,
} from "./hero.styled";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

interface IHeroProps {
    children?: any;
    linkClick: () => void;
}
export const Hero = ({ children, linkClick }: IHeroProps) => {
    const data = useStaticQuery(
        graphql`
            query {
                desktop: file(relativePath: { eq: "Slider_Bachelor2021_SitDown.jpg" }) {
                    childImageSharp {
                        fluid(quality: 100, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    );
    return (
        <HeroWrapper>
            <HeroBackgroundImage fluid={data.desktop.childImageSharp.fluid}>
                <HeroBodyWrapper>
                    <HeroTextWrapper>
                        <HeroTitleWrapper>Bachelor visé Bac+3 sur ParcourSup</HeroTitleWrapper>
                        <HeroSubTitleWrapper>Grande École de commerce post-bac</HeroSubTitleWrapper>
                        <HeroSubTitleWrapper>Échange & double diplôme à l'étranger</HeroSubTitleWrapper>
                        <HeroSubTitleWrapper>Alternance en 3e année possible</HeroSubTitleWrapper>
                    </HeroTextWrapper>
                    <FormLanding mobileHidden={true} linkClick={linkClick} />
                </HeroBodyWrapper>
            </HeroBackgroundImage>
        </HeroWrapper>
    );
};
