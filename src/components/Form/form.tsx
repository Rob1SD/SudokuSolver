import React from "react";
import { CTA } from "../CTA/cta";
import {
    CheckboxWrapper,
    CtaWrapper,
    FormInput,
    FormLink,
    FormLinkTextWrapper,
    FormTitle,
    FormWrapper,
} from "./form.styled";

interface IFormLandingProps {
    linkClick: () => void;
    mobileHidden?: boolean;
}

export const FormLanding = ({ linkClick, mobileHidden }: IFormLandingProps) => {
    return (
        <FormWrapper mobileHidden={mobileHidden}>
            <FormTitle>Télécharger la brochure du Bachelor</FormTitle>
            <FormInput placeholder={"Prénom"} />
            <FormInput placeholder={"Nom"} />
            <FormInput placeholder={"Email"} />
            <FormInput placeholder={"Mobile"} />
            <FormInput placeholder={"Niveau Actuel"} />
            <CheckboxWrapper>
                <FormInput type={"checkbox"} placeholder={"Niveau Actuel"} />
                <FormLinkTextWrapper>
                    {"J'ai lu et j'accepte la "}
                    <FormLink onClick={linkClick}>{" Politique de Gestion et de Protection des Données"}</FormLink>
                </FormLinkTextWrapper>
            </CheckboxWrapper>

            <CtaWrapper>
                <CTA>Télécharger</CTA>
            </CtaWrapper>
        </FormWrapper>
    );
};
