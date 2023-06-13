import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import checkIcon from "../assets/images/icon-checkmark.svg";

const AddOnCard = ({ id, name, desc, monthPrice, yearPrice, isChecked, isYearly }) => {
    const [checked, setChecked] = useState(Number(localStorage.getItem(name)));
    console.log(checked);
    return (
        <Wrapper
            onClick={() => {
                checked ? setChecked(0) : setChecked(1);
                localStorage.setItem(name, checked ? 0 : 1);
            }}
            className={`${checked && "selected"}`}
        >
            <div className={`add ${checked && "checked"}`}>
                <img src={checkIcon} alt="check-mark" />
            </div>
            <div className="info">
                <div className="">
                    <h4>{name}</h4>
                    <p>{desc}</p>
                </div>
                <div className="price">{isYearly ? `+$${yearPrice}/yr` : `+$${monthPrice}/month`}</div>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    border: 1px solid var(--clr-gray-3);
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    .add {
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        cursor: pointer;
        border: 1px solid var(--clr-gray-3);
    }
    .checked {
        background-color: var(--clr-blue-3);
        border-color: var(--clr-blue-3);
    }
    .add img {
        display: none;
    }
    .checked img {
        display: block;
    }

    .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .info p {
        margin-top: 4px;
        color: var(--clr-gray-4);
        font-size: 0.875rem;
    }
    .price {
        color: var(--clr-blue-3);
    }
`;

export default AddOnCard;
