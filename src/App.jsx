import { styled } from "styled-components";
import SideMenu from "./components/SideMenu";
import PersonalInfo from "./pages/PersonalInfo";
import { Route, Routes } from "react-router-dom";
import Plans from "./pages/Plans";
import AddOns from "./pages/AddOns";
import Summary from "./pages/Summary";

function App() {
    return (
        <Wrapper>
            <SideMenu />
            {/* Form */}
            <Routes>
                <Route path="/" element={<PersonalInfo />} />
                <Route path="/plan" element={<Plans />} />
                <Route path="/addons" element={<AddOns />} />
                <Route path="/summary" element={<Summary />} />
            </Routes>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    display: flex;

    width: 860px;
    max-width: 90%;
    margin: 50px auto;
    background-color: #fff;
    border-radius: 10px;
    padding: 1rem;

    .container {
        position: relative;
        height: 500px;
        width: 100%;
        padding: 1.875rem 4rem 1.875rem 5rem;
        color: var(--clr-blue-4);
    }
`;

export default App;
