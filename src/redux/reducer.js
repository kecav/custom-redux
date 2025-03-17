export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const reducer = (state, action) => {
    const { type, byValue=1 } = action;
    switch (type) {
        case INCREMENT: 
            return { ...state, count: state.count + byValue };

        case DECREMENT: 
            return { ...state, count: state.count - byValue };

        default:
            return state;
    }
};
