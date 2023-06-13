import { styled } from "styled-components";
const PlanCard = ({
    iconUrl,
    planName,
    monthPrice,
    yearPrice,
    isYearly,
    index,
    choosenPlan,
    setChoosenPlan,
}) => {
    let isActive = index === choosenPlan;
    return (
        <Wrapper
            onClick={() => {
                setChoosenPlan(index);
            }}
            className={`${isActive && "active-plan"}`}
        >
            <div className="">
                <img src={iconUrl} alt={planName} />
            </div>
            <div className="">
                <h3 className="title">{planName}</h3>
                <div className="price">{isYearly ? `$${yearPrice} / yr` : `$${monthPrice} / mo`}</div>
                {isYearly === 1 && <div className="offer">2 months free</div>}
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.article`
    border: 1px solid var(--clr-gray-3);
    border-radius: 8px;
    padding: 1rem;
    cursor: pointer;
    transition: 0.2s all;

    &:hover {
        border-color: var(--clr-blue-3);
    }
    .title {
        font-size: 1rem;
        margin-top: 2.4rem;
        color: var(--clr-blue-4);
        margin-bottom: 0.25rem;
    }
    .price {
        font-size: 0.875rem;
        color: var(--clr-gray-4);
        margin-bottom: 0.25rem;
    }
    .offer {
        font-size: 0.75rem;
        color: var(--clr-blue-4);
    }

    @media only screen and (max-width: 600px) {
        display: flex;
        gap: 1rem;
        .title {
            margin-top: 0;
        }
    }
`;

export default PlanCard;
