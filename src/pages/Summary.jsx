import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Summary = () => {
    return (
        <Wrapper className="container">
            <h1 className="title">Finishing up</h1>
            <p className="text">Double-check everything looks OK before confirming.</p>

            <div className="details">
                <div className="plan-details">
                    <div className="plan-name">
                        <p>Arcade(Yearly)</p>
                        <Link to="/plan">Change</Link>
                    </div>
                    <div className="plan-price">$90/yr</div>
                </div>
                <div className="add-ons">
                    <div className="add-on">
                        <p className="add-on-name">Online service</p>
                        <p className="add-on-price">+$10/yr</p>
                    </div>
                    <div className="add-on">
                        <p className="add-on-name">Online service</p>
                        <p className="add-on-price">+$10/yr</p>
                    </div>
                </div>
            </div>
            <div className="add-ons-total">
                <div className="total-name">Total (per year)</div>
                <div className="total-price">$120/yr</div>
            </div>
            <div className="btns-container">
                <Link to="/" className="link">
                    Go Back
                </Link>
                <button className="btn btn-confirm ">Confirm</button>
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
`;

export default Summary;
