export function reducer(state, { payload, type }) {
    switch (type) {
        case 'ADD_DIGIT':
            if (state.overwrite) {
                return {
                    ...state,
                    currentOperand: payload.digit,
                    overwrite: false,
                }
            }
            if (payload.digit === "0" && state.currentOperand === "0") {
                return state
            }
            if (payload.digit === "." && state.currentOperand.includes(".")) {
                return state
            }

            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${payload.digit}`,
            }
        case 'CHOSE_OPERATION':
            if (state.currentOperand == null && state.previousOperand == null) {
                return state
            }

            if (state.currentOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                }
            }

            if (state.previousOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                    previousOperand: state.currentOperand,
                    currentOperand: null,
                }
            }

            return {
                ...state,
                previousOperand: evaluate(state),
                operation: payload.operation,
                currentOperand: null,
            }
        case 'CLEAR':
            return {}
        case 'EVALUATE':
            if(state.operation == null || state.currentOperand == null || state.previousOperand == null){
                return state;
            }

            return{
                ...state,
                overwrite: true,
                previousOperand: null,
                currentOperand: evaluate(state),
                operation: null
            }
        case 'DELETE_DIGIT':
            if(state.overwrite){
                return {
                    ...state,
                    overwrite: false,
                    currentOperand: null,
                }
            }
            if(state.currentOperand == null) return state;
            if(state.currentOperand.length === 1){
                return { ...state, currentOperand: null }
            }
            return{
                ...state,
                currentOperand: state.currentOperand.slice(0, -1)   
            }
    }
};

function evaluate({ currentOperand, previousOperand, operation }) {
    const prev = parseFloat(previousOperand);
    const curr = parseFloat(currentOperand);
    let computation = '';

    if (isNaN(prev) || isNaN(curr)) return '';
    
    switch (operation) {
        case '+': {
            computation = prev + curr;
            break;
        }
        case '-': {
            computation = prev - curr;
            break;
        }
        case '*': {
            computation = prev * curr;
            break;
        }
        case '÷': {
            computation = prev / curr;
            break;
        }
    };
    return computation.toString();
}