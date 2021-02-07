import React, { useState } from "react";
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
    });
    const handlePrimeCLick = () => {
        setState({ popInDisplayed: !state.popInDisplayed });
    };
    return (
        <LandingWrapper>
            <NavBar onClickPrime={handlePrimeCLick} />
            <LandingPopIn hidden={!state.popInDisplayed}>
                <LandingPopInCloseButtonWrapper>
                    <LandingPopInCloseButton onClick={handlePrimeCLick}>X</LandingPopInCloseButton>
                </LandingPopInCloseButtonWrapper>
                <LandingIframe title="Réserver un rdv" src={"https://calendly.com/rsahbi/rendez-vous?month=2021-02"} />
            </LandingPopIn>
        </LandingWrapper>
    );
};
