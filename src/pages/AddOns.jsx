import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import AddOnCard from "../components/AddOnCard";

const AddOns = () => {
    return (
        <Wrapper className="container">
            {" "}
            <h1 className="title">Pick add-ons</h1>
            <p className="text">Add-ons help enhance your gaming experience</p>
            <div className="cards-container">
                <AddOnCard />
                <AddOnCard />
                <AddOnCard />
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
    .cards-container {
        display: grid;
        gap: 1rem;
    }
`;

export default AddOns;
