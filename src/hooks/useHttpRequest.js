import { useReducer, useCallback } from "react";

const httpReducer = (state, action) => {
    if (action.type === 'SEND') {}
    if (action.type === 'SUCCESS') {}
    if (action.type === 'ERROR') {}

    return state
}

const useHttpRequest = (requestFn, startWithPending = false) => {
    const [ httpState, dispatch ] = useReducer(httpReducer, {})
}
