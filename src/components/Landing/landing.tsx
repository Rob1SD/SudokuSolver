import React, { useState } from "react";
import { FormLanding } from "../Form/form";
import { Hero } from "../Hero/hero";
import { NavBar } from "../NavigationBar/navBar";
import {
    LandingIframe,
    LandingPopIn,
    LandingPopInCloseButton,
    LandingPopInCloseButtonWrapper,
    LandingWrapper,
} from "./landing.styled";

export const Landing = () => {
    const [state, setState] = useState({
        popInDisplayed: false,
        popInUrl: "https://calendly.com/rsahbi/rendez-vous?month=2021-02",
    });
    const handlePrimeCLick = (url?: string) => {
        url && url !== state.popInUrl
            ? setState({ popInUrl: url, popInDisplayed: !state.popInDisplayed })
            : setState({ ...state, popInDisplayed: !state.popInDisplayed });
    };
    return (
        <LandingWrapper>
            <NavBar onClickPrime={() => handlePrimeCLick("https://calendly.com/rsahbi/rendez-vous?month=2021-02")} />
            <LandingPopIn hidden={!state.popInDisplayed}>
                <LandingPopInCloseButtonWrapper>
                    <LandingPopInCloseButton onClick={() => handlePrimeCLick()}>X</LandingPopInCloseButton>
                </LandingPopInCloseButtonWrapper>
                <LandingIframe title="Réserver un rdv" src={state.popInUrl} />
            </LandingPopIn>
            <Hero linkClick={() => handlePrimeCLick("https://iscparis.com/mentions-legales/")} />
        </LandingWrapper>
    );
};
