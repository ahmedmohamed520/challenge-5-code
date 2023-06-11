import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import PlanCard from "../components/PlanCard";

const Plans = () => {
    const [yearly, setYearly] = useState(false);
    return (
        <Wrapper className="container">
            <h1 className="title">Personal info</h1>
            <p className="text">please provide your name, email address, and phone number.</p>

            <div className="plans-container">
                <PlanCard />
                <PlanCard />
                <PlanCard />
            </div>

            <div className="select">
                <p class={`option ${!yearly && "active"}`}>Monthly</p>
                <div
                    onClick={() => {
                        setYearly(!yearly);
                    }}
                    className="selector"
                >
                    <div className={`selector-circle ${yearly ? "right" : "left"}`}></div>
                </div>
                <p class={`option ${yearly && "active"}`}>Yearly</p>
            </div>
            <div className="btns-container">
                <Link to="/" className="link">
                    Go Back
                </Link>
                <button className="btn">Next Step</button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .plans-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
    }
    .select {
        display: flex;
        justify-content: center;
        padding: 0.75rem;
        gap: 1.5rem;
        background: var(--clr-gray-2);
        border-radius: 10px;
        margin-top: 1.5rem;
    }
    .option {
        color: var(--clr-gray-4);
        font-weight: 500;
        font-size: 0.875rem;
        transition: 0.1s all linear;
    }
    .selector {
        background-color: var(--clr-blue-4);
        width: 32px;
        height: 18px;
        border-radius: 20px;
        position: relative;
        cursor: pointer;
    }
    .selector-circle {
        position: absolute;
        top: 3px;
        width: 12px;
        height: 12px;
        background-color: #fff;
        border-radius: 50%;
    }
    .left {
        left: 3px;
    }
    .right {
        right: 3px;
    }

    .active {
        color: var(--clr-blue-4);
    }
`;

export default Plans;
