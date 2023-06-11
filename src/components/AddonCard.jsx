import React, { useState } from "react";
import { styled } from "styled-components";
import checkIcon from "../assets/images/icon-checkmark.svg";

const AddOnCard = () => {
    const [checked, setChecked] = useState(false);

    return (
        <Wrapper
            onClick={() => {
                setChecked(!checked);
            }}
            className={`${checked && "selected"}`}
        >
            <div className={`add ${checked && "checked"}`}>
                <img src={checkIcon} alt="check-mark" />
            </div>
            <div className="info">
                <div className="">
                    <h4>Online service</h4>
                    <p>Access to multiplayer games</p>
                </div>
                <div className="price">+$10/yr</div>
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
