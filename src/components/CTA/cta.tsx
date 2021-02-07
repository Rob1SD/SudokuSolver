import React, { Children } from "react";
import { CTAWrapper } from "./cta.styled";

interface ICTAProps {
    href?: string;
    onClick?: () => void;
    prime?: boolean;
    children?: any;
}
export const CTA = (props: ICTAProps) => {
    console.log(props);
    return props.href ? (
        <CTAWrapper href={props.href} prime={props.prime}>
            {props.children}
        </CTAWrapper>
    ) : (
        <CTAWrapper onClick={props.onClick ? props.onClick : () => {}} prime={props.prime}>
            {props.children}
        </CTAWrapper>
    );
};
