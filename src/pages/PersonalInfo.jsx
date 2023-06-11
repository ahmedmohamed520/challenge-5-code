import React from "react";
import { styled } from "styled-components";
import { useGlobal } from "../context/global-context";

const PersonalInfo = () => {
    const {
        emailChangeHandler,
        nameChangeHandler,
        phoneChangeHandler,
        isEmailValid,
        isPhoneValid,
        isNameValid,
    } = useGlobal();
    return (
        <Wrapper className="container">
            <h1 className="title">Personal info</h1>
            <p className="text">please provide your name, email address, and phone number.</p>
            <form action="" className="form">
                <div className={`form-control ${!isNameValid && isNameTouched && "error"}`}>
                    <label htmlFor="">Name</label>
                    <span>Invalid</span>
                    <input onChange={nameChangeHandler} type="text" placeholder="e.g stephen King" />
                </div>
                <div className={`form-control ${!isEmailValid && isEmailTouched && "error"}`}>
                    <label htmlFor="">Email Address</label>
                    <span>Invalid</span>
                    <input
                        onChange={emailChangeHandler}
                        type="email"
                        placeholder="e.g stephen King@lorem.com"
                    />
                </div>
                <div className={`form-control ${!isPhoneValid && isPhoneTouched && "error"}`}>
                    <label htmlFor="">Phone Number</label>
                    <span>Invalid</span>
                    <input onChange={phoneChangeHandler} type="tel" placeholder="e.g +1 234 567 890" />
                </div>
                <div className="btns-container">
                    <button className="btn">Next Step</button>
                </div>
            </form>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    .form {
        display: grid;
    }
    .form-control {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-bottom: 1rem;
        position: relative;
    }
    .form-control label {
        font-size: 0.875rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
    }
    .form-control span {
        display: none;
        position: absolute;
        right: 0;
        font-weight: 700;
        color: var(--clr-red);
        font-size: 0.875rem;
    }
    .form-control input {
        padding: 0.75rem;
        border-radius: 8px;
        border: 1px solid var(--clr-gray-3);
        font-size: 1rem;
        width: 100%;
    }
    .form-control input::placeholder {
        font-weight: 700;
        color: var(--clr-gray-4);
    }
`;

export default PersonalInfo;
