import React from "react";
import { CTA } from "../CTA/cta";
import { CheckboxWrapper, CtaWrapper, FormInput, FormLink, FormTitle, FormWrapper } from "./form.styled";

interface IFormLandingProps {
    linkClick: () => void;
}

export const FormLanding = ({ linkClick }: IFormLandingProps) => {
    return (
        <FormWrapper>
            <FormTitle>Télécharger la brochure du Bachelor</FormTitle>
            <FormInput placeholder={"Prénom"} />
            <FormInput placeholder={"Nom"} />
            <FormInput placeholder={"Email"} />
            <FormInput placeholder={"Mobile"} />
            <FormInput placeholder={"Niveau Actuel"} />
            <CheckboxWrapper>
                <FormInput type={"checkbox"} placeholder={"Niveau Actuel"} />
                {"J'ai lu et j'accepte la "}
                <FormLink onClick={linkClick}>{" Politique de Gestion et de Protection des Données"}</FormLink>
            </CheckboxWrapper>

            <CtaWrapper>
                <CTA>Télécharger</CTA>
            </CtaWrapper>
        </FormWrapper>
    );
};
