import { FluidObject } from "gatsby-image";
import React from "react";
import { CardIconImageWrapper, CardIconSubTextWrapper, CardIconTextAreaWrapper, CardIconTextWrapper, CardIconWrapper } from "./cardIcon.styled";

interface ICardIconProps {
    fluid: any;
    text: string;
    subText: string;
}
export const CardIcon = (props: ICardIconProps) => {
    const image = props.fluid.childImageSharp.fluid;
    return (
        <CardIconWrapper>
            <CardIconImageWrapper fluid={image as FluidObject} />
            <CardIconTextAreaWrapper>
                <CardIconTextWrapper>{props.text}</CardIconTextWrapper>
                <CardIconSubTextWrapper>{props.subText}</CardIconSubTextWrapper>
            </CardIconTextAreaWrapper>
        </CardIconWrapper>
    );
};
