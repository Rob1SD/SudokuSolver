import styled from "styled-components";
import Img, { FluidObject } from "gatsby-image";
export const CardIconWrapper = styled.div`
    padding: 40px;
    box-shadow: 3px 13px 17px #aaaaaa;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    min-width: 100px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CardIconImageWrapper = styled(Img)<{
    fluid: FluidObject | FluidObject[];
}>`
    width: 60px;
`;
export const CardIconTextAreaWrapper = styled.div`
    padding: 10px;
    color: #666666;
    text-align: center;
`;
export const CardIconTextWrapper = styled.div``;
export const CardIconSubTextWrapper = styled.div`
    font-weight: 600;
`;
