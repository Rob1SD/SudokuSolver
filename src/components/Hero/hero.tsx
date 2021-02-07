import React from "react";
import { FormLanding } from "../Form/form";
import { HeroBodyWrapper, HeroWrapper } from "./hero.styled";

interface IHeroProps {
    children?: any;
}
export const Hero = ({ children }: IHeroProps) => {
    return (
        <HeroWrapper>
            <HeroBodyWrapper>
                <FormLanding />
            </HeroBodyWrapper>
        </HeroWrapper>
    );
};
