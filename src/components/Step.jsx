import React from "react";
import { styled } from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

const Step = ({ id, text, url }) => {
    const path = window.location.pathname;
    const navigate = useNavigate();
    const clickHandler = (e) => {
        e.preventDefault();
    };
    return (
        <Wrapper
            onClick={clickHandler}
            to={url}
            className={path === "/success" && url === "/summary" && "active"}
        >
            <div className="num">{id}</div>
            <div className="step-info">
                <p className="step">step {id}</p>
                <p className="title">{text}</p>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #fff;
    margin-bottom: 2rem;
    .num {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        background: transparent;
        border: 1px solid #fff;
        color: #fff;
        font-weight: 500;
    }
    .step {
        color: var(--clr-blue-2);
        text-transform: uppercase;
        font-size: 0.75rem;
        margin-bottom: 4px;
    }
    .title {
        text-transform: uppercase;
        font-size: 0.8125rem;
        font-weight: 500;
        letter-spacing: 1.5px;
    }

    @media only screen and (max-width: 600px) {
        position: relative;
        top: -1rem;
        .step-info {
            display: none;
        }
    }
`;
export default Step;
