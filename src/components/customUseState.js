import App from "../App";

export const useState = (initialState = null) => {
    let state = initialState;

    const updateState = (newState) => {
        state = newState;
        console.log("update", state);
        App();
    }

    return [state, updateState];
}