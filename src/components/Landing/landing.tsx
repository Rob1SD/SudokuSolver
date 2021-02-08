import React, { useState } from "react";
import { FormLanding } from "../Form/form";
import { Hero } from "../Hero/hero";
import { NavBar } from "../NavigationBar/navBar";
import { SecondaryNavBar } from "../NavigationBar/secondaryNav";
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
        mobileFormPopinDisplay: false,
    });
    const handlePrimeCLick = (url?: string) => {
        url && url !== state.popInUrl
            ? setState({ ...state, popInUrl: url, popInDisplayed: !state.popInDisplayed })
            : setState({ ...state, popInDisplayed: !state.popInDisplayed });
    };
    const handleSecondaryCLick = (url?: string) => {
        setState({ ...state, mobileFormPopinDisplay: !state.mobileFormPopinDisplay });
    };
    return (
        <LandingWrapper>
            <NavBar
                onClickSecondary={handleSecondaryCLick}
                onClickPrime={() => handlePrimeCLick("https://calendly.com/rsahbi/rendez-vous?month=2021-02")}
            />
            <LandingPopIn zIndex={4000} hidden={!state.popInDisplayed}>
                <LandingPopInCloseButtonWrapper>
                    <LandingPopInCloseButton onClick={() => handlePrimeCLick()}>X</LandingPopInCloseButton>
                </LandingPopInCloseButtonWrapper>
                <LandingIframe title="Réserver un rdv" src={state.popInUrl} />
            </LandingPopIn>
            <LandingPopIn zIndex={2000} hidden={!state.mobileFormPopinDisplay} desktopHidden={true}>
                <LandingPopInCloseButtonWrapper>
                    <LandingPopInCloseButton onClick={() => handleSecondaryCLick()}>X</LandingPopInCloseButton>
                </LandingPopInCloseButtonWrapper>
                <FormLanding linkClick={() => handlePrimeCLick("https://iscparis.com/mentions-legales/")} />
            </LandingPopIn>
            <Hero linkClick={() => handlePrimeCLick("https://iscparis.com/mentions-legales/")} />
            <SecondaryNavBar />
        </LandingWrapper>
    );
};
