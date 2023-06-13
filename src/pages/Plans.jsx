import { Link } from "react-router-dom";
import { styled } from "styled-components";
import PlanCard from "../components/PlanCard";
import { billingOptions } from "../data";
import { useState } from "react";

const Plans = ({ isYearly, changePlanType }) => {
    const [choosenPlan, setChoosenPlan] = useState(Number(localStorage.getItem("choosenPlan")) || 0);
    const choosePlanHandler = (index) => {
        setChoosenPlan(index);
        localStorage.setItem("choosenPlan", index);
    };
    return (
        <Wrapper className="container">
            <h1 className="title">Select your plan</h1>
            <p className="text ">You have the option of monthly or yearly billing.</p>

            <div className="plans-container">
                {billingOptions.map((option, index) => {
                    return (
                        <PlanCard
                            key={option.planName}
                            isYearly={isYearly}
                            {...option}
                            index={index}
                            choosenPlan={choosenPlan}
                            setChoosenPlan={choosePlanHandler}
                        />
                    );
                })}
            </div>

            <div className="select">
                <p className={`option ${!isYearly && "active"}`}>Monthly</p>
                <div onClick={changePlanType} className="selector">
                    <div className={`selector-circle ${isYearly ? "right" : "left"}`}></div>
                </div>
                <p className={`option ${isYearly && "active"}`}>Yearly</p>
            </div>
            <div className="btns-container">
                <Link to="/" className="link">
                    Go Back
                </Link>
                <Link className="btn" to="/addons">
                    Next Step
                </Link>
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

    @media only screen and (max-width: 600px) {
        .plans-container {
            grid-template-columns: 1fr;
        }
    }
`;

export default Plans;
