import { ADD_ON, CHOOSE_PLAN, EMAIL_CHANGE, NAME_CHANGE, PHONE_CHANGE } from "../actions";

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
    if (action.type === CHOOSE_PLAN) {
        return { ...state, choosenPlan: action.payload.index };
    }
    if (action.type === ADD_ON) {
        const addOns = [...state.addOns];
        if (!addOns.includes(action.payload.index)) {
            addOns.push(action.payload.index);
        }
        return { ...state, addOns };
    }

    return state;
};
