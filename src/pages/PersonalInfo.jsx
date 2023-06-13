import React, { useReducer, useState } from "react";
import { styled } from "styled-components";
import Input from "../components/Input";
import { validateEmail, validatePhone } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import { infoReducer } from "../reducers/info-reducer";
import { EMAIL_CHANGE, NAME_CHANGE, PHONE_CHANGE } from "../actions";

const PersonalInfo = () => {
    const navigate = useNavigate();
    const [info, dispatchInfo] = useReducer(infoReducer, {
        email: localStorage.getItem("email") || "",
        phone: localStorage.getItem("phone") || "",
        name: localStorage.getItem("name") || "",
    });
    const { email, phone, name } = info;

    const emailChangeHandler = (e) => {
        dispatchInfo({ type: EMAIL_CHANGE, payload: { value: e.target.value } });
    };
    const nameChangeHandler = (e) => {
        dispatchInfo({ type: NAME_CHANGE, payload: { value: e.target.value } });
    };
    const phoneChangeHandler = (e) => {
        dispatchInfo({ type: PHONE_CHANGE, payload: { value: e.target.value } });
    };
    const [isEmailTouched, setIsEmailTouched] = useState(false);
    const [isNameTouched, setIsNameTouched] = useState(false);
    const [isPhoneTouched, setIsPhoneTouched] = useState(false);

    let emailErrMsg =
        email.trim() === ""
            ? "This field is required"
            : !validateEmail(email) && "Please enter a valid email";

    let nameErrMsg = name.trim() === "" && "This field is required";
    let phoneErrMsg =
        phone.trim() === ""
            ? "This field is required"
            : !validatePhone(phone) && "Please enter a valid phone number";

    const emailBlurHandler = () => {
        setIsEmailTouched(true);
    };
    const nameBlurHandler = () => {
        setIsNameTouched(true);
    };
    const phoneBlurHandler = () => {
        setIsPhoneTouched(true);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        setIsEmailTouched(true);
        setIsNameTouched(true);
        setIsPhoneTouched(true);

        if (!emailErrMsg && !nameErrMsg && !phoneErrMsg) {
            localStorage.setItem("email", email);
            localStorage.setItem("name", name);
            localStorage.setItem("phone", phone);
            navigate("/challenge-5/plan");
        }
    };
    return (
        <Wrapper className="container">
            <h1 className="title">Personal info</h1>
            <p className="text">please provide your name, email address, and phone number.</p>
            <form onSubmit={submitHandler} className="form">
                <Input
                    valueChangeHandler={nameChangeHandler}
                    label="name"
                    placeholder="e.g stephen King"
                    type="text"
                    errMsg={nameErrMsg}
                    blurHandler={nameBlurHandler}
                    isTouched={isNameTouched}
                    val={name}
                />
                <Input
                    valueChangeHandler={emailChangeHandler}
                    label="Email Address"
                    placeholder="e.g stephen King@lorem.com"
                    type="email"
                    errMsg={emailErrMsg}
                    blurHandler={emailBlurHandler}
                    isTouched={isEmailTouched}
                    val={email}
                />
                <Input
                    valueChangeHandler={phoneChangeHandler}
                    label="Phone Number"
                    placeholder="e.g +1 234 567 890"
                    type="tel"
                    errMsg={phoneErrMsg}
                    blurHandler={phoneBlurHandler}
                    isTouched={isPhoneTouched}
                    val={phone}
                />

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
        text-transform: capitalize;
    }
    .form-control span {
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
