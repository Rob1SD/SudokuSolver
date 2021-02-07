import React from "react";
import { CTA } from "../CTA/cta";
import { CtaWrapper, FormInput, FormTitle, FormWrapper } from "./form.styled";

export const FormLanding = () => {
    return (
        <FormWrapper>
            <FormTitle>Télécharger la brochure du Bachelor</FormTitle>
            <FormInput placeholder={"Prénom"} />
            <FormInput placeholder={"Nom"} />
            <FormInput placeholder={"Email"} />
            <FormInput placeholder={"Mobile"} />
            <FormInput placeholder={"Niveau Actuel"} />
            <CtaWrapper>
                <CTA>Télécharger</CTA>
            </CtaWrapper>
        </FormWrapper>
    );
};
