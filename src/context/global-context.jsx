import { createContext, useContext, useReducer } from "react";
import { infoReducer } from "./global-reducer";
import { EMAIL_BLUR, EMAIL_CHANGE, NAME_BLUR, NAME_CHANGE, PHONE_BLUR, PHONE_CHANGE } from "../actions";

export const globalContext = createContext();
const GlobalProvider = ({ children }) => {
    const [info, dispatchInfo] = useReducer(infoReducer, {
        email: "",
        isEmailTouched: false,
        isEmailValid: false,
        phone: "",
        isPhoneValid: false,
        isPhoneTouched: false,
        name: "",
        isNameValid: false,
        isNameTouched: false,
    });
    const emailChangeHandler = (e) => {
        dispatchInfo({ type: EMAIL_CHANGE, payload: e.target.value });
    };
    const nameChangeHandler = (e) => {
        dispatchInfo({ type: NAME_CHANGE, payload: e.target.value });
    };
    const phoneChangeHandler = (e) => {
        dispatchInfo({ type: PHONE_CHANGE, payload: e.target.value });
    };
    const emailBlurHandler = (e) => {
        dispatchInfo({ type: EMAIL_BLUR, payload: e.target.value });
    };
    const nameBlurHandler = (e) => {
        dispatchInfo({ type: NAME_BLUR, payload: e.target.value });
    };
    const phoneBlurHandler = (e) => {
        dispatchInfo({ type: PHONE_BLUR, payload: e.target.value });
    };

    return (
        <globalContext.Provider
            value={{
                emailChangeHandler,
                nameChangeHandler,
                phoneChangeHandler,
                isEmailValid: info.isEmailValid,
                isPhoneValid: info.isPhoneValid,
                isNameValid: info.isNameValid,
            }}
        >
            {children}
        </globalContext.Provider>
    );
};

export const useGlobal = () => {
    return useContext(globalContext);
};
export default GlobalProvider;
