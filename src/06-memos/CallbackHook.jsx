import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {
    const [counter, setCounter] = useState(10); 

    const increment = useCallback(
        (value = 5) => {
        setCounter((c) => c + value); 
        
        },
        [],
    )
    

    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    return (
    <>
        <h1>useCallback Hook: { counter } </h1>

        <ShowIncrement increment={ increment } />
    </>
  )
}
