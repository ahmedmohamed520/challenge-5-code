import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { addons, billingOptions } from "../data";

const Summary = () => {
    const navigate = useNavigate();
    const [plan, setPlan] = useState({
        obj: billingOptions[+localStorage.getItem("choosenPlan")],
        isYearly: +localStorage.getItem("isYearly"),
    });
    const addOns = addons.filter((obj) => {
        if (+localStorage.getItem(obj.name)) return obj;
    });
    let total = plan.isYearly ? plan.obj.yearPrice : plan.obj.monthPrice;
    return (
        <Wrapper className="container">
            <div className="desc">
                <h1 className="title">Finishing up</h1>
                <p className="text">Double-check everything looks OK before confirming.</p>
            </div>

            <div className="details">
                <div className="plan-details">
                    <div className="plan-name">
                        <p>
                            {plan.obj.planName}({plan.isYearly ? "Yearly" : "Monthly"})
                        </p>
                        <Link to="/plan">Change</Link>
                    </div>
                    <div className="plan-price">
                        {plan.isYearly ? `$${plan.obj.yearPrice}/yr` : `${plan.obj.monthPrice}/mo`}
                    </div>
                </div>
                <div className="add-ons">
                    {addOns.map((addOn) => {
                        total += plan.isYearly ? addOn.yearPrice : addOn.monthPrice;

                        return (
                            <div key={addOn.id} className="add-on">
                                <p className="add-on-name">{addOn.name}</p>
                                <p className="add-on-price">
                                    {plan.isYearly ? `+$${addOn.yearPrice}/yr` : `${addOn.monthPrice}/mo`}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="add-ons-total">
                <div className="total-name">Total (per {plan.isYearly ? "Year" : "Month"})</div>
                <div className="total-price">
                    ${total}/{plan.isYearly ? "yr" : "mo"}
                </div>
            </div>
            <div className="btns-container">
                <Link to="/addons" className="link">
                    Go Back
                </Link>
                <button
                    onClick={() => {
                        navigate("/success");
                    }}
                    className="btn btn-confirm "
                >
                    Confirm
                </button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .details {
        background: var(--clr-gray-1);
        padding: 1rem;
        border-radius: 10px;
    }
    .plan-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 1.5rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid var(--clr-gray-3);
    }
    .plan-name {
    }
    .plan-name p {
        color: var(--clr-blue-4);
        font-weight: 700;
        line-height: 1.5;
    }
    .plan-name a {
        text-decoration: underline;
        color: var(--clr-gray-4);
    }
    .plan-price {
        font-weight: 700;
        color: var(--clr-blue-4);
    }
    .add-ons {
        display: grid;
        gap: 1rem;
    }
    .add-on {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .add-on-name {
        color: var(--clr-gray-4);
        font-size: 0.875rem;
    }
    .add-on-price {
        color: var(--clr-blue-4);
    }

    .add-ons-total {
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .total-name {
        font-size: 0.875rem;
        color: var(--clr-gray-4);
    }
    .total-price {
        font-weight: 700;
        color: var(--clr-blue-3);
    }
    .btn-confirm {
        background-color: var(--clr-blue-3);
        padding: 0.75rem 1.5rem;
    }
    .btn-confirm:hover {
        background-color: var(--clr-blue-5);
    }
`;

export default Summary;
