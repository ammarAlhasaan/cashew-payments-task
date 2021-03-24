import {REMOVER_MESSAGE, SET_MESSAGE} from "./message.types";

export const setMessage = (message: string) => ({
    type: SET_MESSAGE,
    payload: message,
});

export const clearMessage = () => ({
    type: REMOVER_MESSAGE,
});
