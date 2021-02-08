import styled from "styled-components";

export const LandingWrapper = styled.div`
    height: 100%;
`;
export const SectionWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
export const SectionBodyWrapper = styled.div`
    display: flex;
    max-width: 1024px;
    width: 100%;
    padding: 20px;
`;
export const LandingIframe = styled.iframe`
    width: 80%;
    height: 80%;
`;
export const LandingPopInCloseButtonWrapper = styled.div`
    width: 95%;
    display: flex;
    justify-content: flex-end;
`;
export const LandingPopInCloseButton = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: transparent;
    border: 4px solid white;
    cursor: pointer;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-family: var(--font-family);
    transition: border-color 0.3s linear, color 0.3s linear;
    :hover {
        border: 4px solid grey;
        color: grey;
    }
    @media screen and (max-width: 767px) {
        width: 30px;
        height: 30px;
    }
`;
interface LandingPopInProps {
    hidden?: boolean;
    desktopHidden?: boolean;
    mobileHidden?: boolean;
    zIndex?: number;
}
export const LandingPopIn = styled.div<LandingPopInProps>`
    display: ${(props) => (props.hidden ? "none" : "flex")};
    height: 100vh;
    overflow-y: hidden;
    width: 100%;
    touch-action: none;
    flex-direction: column;
    position: absolute;
    top: 0;
    z-index: ${(props) => (props.zIndex ? props.zIndex : "1000")};
    background-color: rgba(100, 100, 100, 0.6);
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1023px) {
        ${(props) => (props.mobileHidden ? "display:none" : "")}
    }
    @media screen and (min-width: 1024px) {
        ${(props) => (props.desktopHidden ? "display:none" : "")}
    }
`;
