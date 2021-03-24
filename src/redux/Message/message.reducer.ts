import {REMOVER_MESSAGE, SET_MESSAGE} from "./message.types";

const initialState = {};

export default function (state = initialState, action: { type: string, payload: string }) {
    const {type, payload} = action;

    switch (type) {
        case SET_MESSAGE:
            return {message: payload};
        case REMOVER_MESSAGE:
            return {message: ""};
        default:
            return state;
    }
}
