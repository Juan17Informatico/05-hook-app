import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter"

const heavyStuff = (iterationNumber = 100) => {
    for(let i = 0; i < iterationNumber; i++){
         console.log("Ahí vamos");
    }

    return `${iterationNumber} iteraciones realizadas`
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(1000);
    const [show, setShow] = useState(true); 

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]); 

    return (
    <>
        <h3>Counter: <small>{ counter }</small></h3>
        <hr />

        <h4>{ memorizedValue }</h4>

        <button 
        className="btn btn-primary"
        onClick={ () => increment() }
        >
            +1
        </button>

        <button
            className="btn btn-danger"
            onClick={() => setShow(!show)}
        >
            Show/Hide {JSON.stringify(show)}
        </button>

    </>
    )
}
