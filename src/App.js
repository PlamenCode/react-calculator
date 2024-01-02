import { useReducer } from "react";
import { reducer } from "./helpers/reducer";
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";
import { formatOperand } from "./helpers/integerFormatter";

const initialState = {
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="calculator-grid">
        <div className="output">
            <div className="previous-operand">{formatOperand(state.previousOperand)} {state.operation}</div>
            <div className="current-operand">{formatOperand(state.currentOperand)}</div>
        </div>

        <button className='span-two' onClick={() => dispatch({ type: 'CLEAR' })}>AC</button>
        <button onClick={() => dispatch({ type: 'DELETE_DIGIT' })}>DEL</button>
        <OperationButton operation='÷' dispatch={dispatch} />
        <DigitButton digit='1' dispatch={dispatch}/>
        <DigitButton digit='2' dispatch={dispatch}/>
        <DigitButton digit='3' dispatch={dispatch}/>
        <OperationButton operation='*' dispatch={dispatch} />
        <DigitButton digit='4' dispatch={dispatch}/>
        <DigitButton digit='5' dispatch={dispatch}/>
        <DigitButton digit='6' dispatch={dispatch}/>
        <OperationButton operation='+' dispatch={dispatch} />
        <DigitButton digit='7' dispatch={dispatch}/>
        <DigitButton digit='8' dispatch={dispatch}/>
        <DigitButton digit='9' dispatch={dispatch}/>
        <OperationButton operation='-' dispatch={dispatch} />
        <DigitButton digit='.' dispatch={dispatch}/>
        <DigitButton digit='0' dispatch={dispatch}/>
        <button className='span-two' onClick={() => dispatch({ type: 'EVALUATE' })}>=</button>
        
    </div>
  );
}

export default App;
