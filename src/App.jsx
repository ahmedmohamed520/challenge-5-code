import { styled } from "styled-components";
import SideMenu from "./components/SideMenu";
import PersonalInfo from "./pages/PersonalInfo";
import { Route, Routes } from "react-router-dom";
import Plans from "./pages/Plans";
import AddOns from "./pages/AddOns";
import Summary from "./pages/Summary";
import { useState } from "react";
import Success from "./pages/Success";

function App() {
    const [isYearly, setIsYearly] = useState(+localStorage.getItem("isYearly"));
    const changePlanType = () => {
        setIsYearly(isYearly ? 0 : 1);
        localStorage.setItem("isYearly", isYearly ? 0 : 1);
    };
    return (
        <Wrapper>
            <SideMenu />
            {/* Form */}
            <Routes>
                <Route path="/" element={<PersonalInfo />} />
                <Route path="/plan" element={<Plans isYearly={isYearly} changePlanType={changePlanType} />} />
                <Route path="/addons" element={<AddOns isYearly={isYearly} />} />
                <Route path="/summary" element={<Summary />} />
                <Route path="/success" element={<Success />} />
            </Routes>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    display: flex;

    width: 860px;
    max-width: 90%;
    margin: 50px auto;

    border-radius: 10px;
    padding: 1rem;

    .container {
        position: relative;
        height: 500px;
        width: 100%;
        background-color: #fff;
        padding: 1.875rem 4rem 1.875rem 5rem;
        color: var(--clr-blue-4);
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        width: 100%;
        max-width: 100%;
        margin: 0;
        padding: 0;
        position: relative;

        .container {
            margin: 0 auto;
            margin-top: -75px;
            max-width: 90%;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            padding: 1.875rem 2rem 1.875rem 2rem;
            background-color: #fff;
            height: auto;
            position: static;
            margin-bottom: 150px;
        }
    }
`;

export default App;
