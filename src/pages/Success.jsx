import React from "react";
import { styled } from "styled-components";
import checkIcon from "../assets/images/icon-thank-you.svg";

const Success = () => {
    return (
        <Wrapper className="container">
            <div className="img">
                <img src={checkIcon} alt="Check icon" />
            </div>
            <h2 className="title">Thank you!</h2>
            <p className="text">
                Thanks for confirming your subscription! We hope you have fun using our platform, if you ever
                need support, please feel free to email us at support@loremgaming.com.
            </p>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    .img {
        margin-bottom: 2rem;
    }
    .title {
        margin-bottom: 0.5rem;
    }

    .text {
        line-height: 1.3;
    }
`;

export default Success;
