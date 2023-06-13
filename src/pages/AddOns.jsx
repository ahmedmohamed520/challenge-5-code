import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import AddOnCard from "../components/AddOnCard";
import { addons } from "../data";

const AddOns = ({ isYearly }) => {
    return (
        <Wrapper className="container">
            {" "}
            <h1 className="title">Pick add-ons</h1>
            <p className="text">Add-ons help enhance your gaming experience</p>
            <div className="cards-container">
                {addons.map((addition) => (
                    <AddOnCard key={addition.id} {...addition} isYearly={isYearly} />
                ))}
            </div>
            <div className="btns-container">
                <Link to="/plan" className="link">
                    Go Back
                </Link>
                <Link className="btn" to="/summary">
                    Next Step
                </Link>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .cards-container {
        display: grid;
        gap: 1rem;
    }
`;

export default AddOns;
