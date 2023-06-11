import { EMAIL_CHANGE, NAME_CHANGE, PHONE_CHANGE } from "../actions";

function validateEmail(input) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(input);
}
const validatePhone = (input_str) => {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    return re.test(input_str);
};
export const infoReducer = (state, action) => {
    if (action.type === EMAIL_CHANGE) {
        if (state.isEmailValid === false) {
            return { ...state, isEmailValid: validateEmail(action.payload) };
        }
        return state;
    }
    if (action.type === PHONE_CHANGE) {
        if (state.isPhoneValid === false) {
            return { ...state, isPhoneValid: validatePhone(action.payload) };
        }
        return state;
    }
    if (action.type === NAME_CHANGE) {
        if (state.isNameValid === false) {
            return { ...state, isNameValid: action.payload.trim().length > 1 };
        }
        return state;
    }

    return state;
};
