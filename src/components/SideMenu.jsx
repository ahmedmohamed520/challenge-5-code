import React from "react";
import { styled } from "styled-components";
import bgImg from "../assets/images/bg-sidebar-desktop.svg";
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
    background-image: url(${bgImg});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1.5rem;
    border-radius: 10px;
`;

export default SideMenu;
