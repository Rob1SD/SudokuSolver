import React from "react";
import { FormLanding } from "../Form/form";
import { HeroBodyWrapper, HeroWrapper } from "./hero.styled";

interface IHeroProps {
    children?: any;
    linkClick:()=>void;
}
export const Hero = ({ children, linkClick }: IHeroProps) => {
    return (
        <HeroWrapper>
            <HeroBodyWrapper>
                <FormLanding linkClick={linkClick}/>
            </HeroBodyWrapper>
        </HeroWrapper>
    );
};
