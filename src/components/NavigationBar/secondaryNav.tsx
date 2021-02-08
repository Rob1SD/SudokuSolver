import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { CardIcon } from "../CardIcon/cardIcon";
import { SecondaryNavBarBodyWrapper, SecondaryNavBarCardWrapper, SecondaryNavBarWrapper } from "./secondaryNav.styled";

export const SecondaryNavBar = () => {
    const data = useStaticQuery(
        graphql`
            query {
                card1: file(relativePath: { eq: "campus_orange.png" }) {
                    childImageSharp {
                        fluid(quality: 100, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                card2: file(relativePath: { eq: "accompagnement_orange.png" }) {
                    childImageSharp {
                        fluid(quality: 100, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                card3: file(relativePath: { eq: "globe_orange.png" }) {
                    childImageSharp {
                        fluid(quality: 100, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                card4: file(relativePath: { eq: "education_orange.png" }) {
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
        <SecondaryNavBarWrapper>
            <SecondaryNavBarBodyWrapper>
                <SecondaryNavBarCardWrapper>
                    <CardIcon fluid={data.card1} text={"Campus"} subText={"Paris et Orléans"} />
                    <CardIcon fluid={data.card2} text={"Visé Bac +3 par l'Etat"} subText={"accrédité AACSB & BGA"} />
                    <CardIcon fluid={data.card3} text={"Partenaires internationaux"} subText={"130"} />
                    <CardIcon fluid={data.card4} text={"Anciens étudiants"} subText={"19 000"} />
                </SecondaryNavBarCardWrapper>
            </SecondaryNavBarBodyWrapper>
        </SecondaryNavBarWrapper>
    );
};
