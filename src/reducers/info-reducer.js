import { EMAIL_CHANGE, NAME_CHANGE, PHONE_CHANGE } from "../actions";

export const infoReducer = (state, action) => {
    if (action.type === EMAIL_CHANGE) {
        return { ...state, email: action.payload.value };
    }
    if (action.type === PHONE_CHANGE) {
        return { ...state, phone: action.payload.value };
    }
    if (action.type === NAME_CHANGE) {
        return { ...state, name: action.payload.value };
    }

    return state;
};
