import React from "react";
import { CTA } from "../CTA/cta";
import { NavBarBodyWrapper, NavBarCTAWrapper, NavBarImage, NavBarImageWrapper, NavBarWrapper } from "./navBar.styled";
import A from "../../images/ISCParis_GrandeEcole_RVB.png";

interface INavBarProps {
    onClickPrime?: () => void;
    onClickSecondary?: () => void;
}
export const NavBar = (props: INavBarProps) => {
    return (
        <NavBarWrapper>
            <NavBarBodyWrapper>
                <NavBarImageWrapper>
                    <NavBarImage src={A} alt="navbarimage" />
                </NavBarImageWrapper>
                <NavBarCTAWrapper>
                    <CTA onClick={props.onClickSecondary}>Télécharger la brochure</CTA>
                    <CTA prime={true} onClick={props.onClickPrime}>
                        Prendre un rdv
                    </CTA>
                </NavBarCTAWrapper>
            </NavBarBodyWrapper>
        </NavBarWrapper>
    );
};
