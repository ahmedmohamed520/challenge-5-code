import React from "react";
import { styled } from "styled-components";

const Input = ({ valueChangeHandler, label, placeholder, type, errMsg, blurHandler, isTouched, val }) => {
    return (
        <Wrapper className={`form-control ${errMsg && isTouched && "error"}`}>
            <label htmlFor="">{label}</label>
            {errMsg && isTouched && <span>{errMsg}</span>}
            <input
                onBlur={blurHandler}
                onChange={valueChangeHandler}
                type={type}
                placeholder={placeholder}
                value={val}
            />
        </Wrapper>
    );
};
const Wrapper = styled.div``;

export default Input;
