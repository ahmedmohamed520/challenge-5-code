import React from "react";
import { styled } from "styled-components";
import deskBgImg from "../assets/images/bg-sidebar-desktop.svg";
import mobBgImg from "../assets/images/bg-sidebar-mobile.svg";
import Step from "./Step";
import { steps } from "../data";

const SideMenu = () => {
    return (
        <Wrapper>
            {/* Step */}
            {steps.map((step) => {
                return <Step key={step.id} {...step} />;
            })}
        </Wrapper>
    );
};
const Wrapper = styled.aside`
    width: 20rem;
    max-width: 40%;
    background-image: url(${deskBgImg});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1.5rem;
    border-radius: 10px;

    @media only screen and (max-width: 600px) {
        background-image: url(${mobBgImg});
        background-position: top;
        width: 100%;
        max-width: 100%;
        border-radius: 0;
        display: flex;
        justify-content: center;
        gap: 1rem;

        height: 35vh;
    }
`;

export default SideMenu;
