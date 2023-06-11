import React from "react";
import { styled } from "styled-components";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

const PlanCard = () => {
    return (
        <Wrapper>
            <div className="">
                <img src={arcadeIcon} alt="arcade" />
            </div>
            <h3 className="title">Arcade</h3>
            <div className="price">$90/yr</div>
            <div className="offer">2 months free</div>
        </Wrapper>
    );
};
const Wrapper = styled.article`
    border: 1px solid var(--clr-gray-3);
    border-radius: 8px;
    padding: 1rem;
    cursor: pointer;
    .title {
        font-size: 1rem;
        margin-top: 2.4rem;
        color: var(--clr-blue-4);
        margin-bottom: 0.25rem;
    }
    .price {
        font-size: 0.875rem;
        color: var(--clr-gray-4);
        margin-bottom: 0.25rem;
    }
    .offer {
        font-size: 0.75rem;
        color: var(--clr-blue-4);
    }
`;

export default PlanCard;
